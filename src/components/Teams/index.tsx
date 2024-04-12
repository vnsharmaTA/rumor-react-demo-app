import { useEffect, useState } from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';
import RInput from '../../core/Input';
import { useLazyGetTeamsQuery } from '../../services/api';
import useDebounce from '../../hooks/useDebounce';
import { ITeamsApiResponse } from '../../types';
import InviteIcon from '../../assets/image/inviteIcon.png';
import LoadingSkeleton from '../LoadingSkeleton';
import { STATIC_MESSAGES } from '../../constants';

/**
 * Component to render teams table with search and infinite scroll
 *
 * Component handles loading/error states for table search and pagination
 *
 * Used lazy query to have more control over data fetching logic via RTKs
 *
 * Filter through Member role functionality is yet to be implemented along with invite member
 * @return {*}
 */
const Teams = () => {
  const [page, setPage] = useState(1);
  const [nameInput, setNameInput] = useState('');
  const debouncedSearchTerm = useDebounce(nameInput, 500);
  const [trigger, { isLoading, error, isFetching }] = useLazyGetTeamsQuery();
  const [updatedTeamsData, setUpdatedTeamsData] = useState<{
    timestamp?: number;
    data: ITeamsApiResponse[];
  }>();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Calling the API in side effect when a page or search parameter changes, using debounce time to cut down on pointless api calls from users searching
  useEffect(() => {
    trigger({ page, name: debouncedSearchTerm })
      .then(res => {
        if (res?.data?.length) {
          setUpdatedTeamsData(prev => {
            if (prev?.timestamp === res?.startedTimeStamp) {
              return prev;
            }
            const updatedArray = [...(prev?.data || [])];
            return {
              timestamp: res?.startedTimeStamp,
              data: [...updatedArray, ...(res?.data || [])],
            };
          });
        }
      })
      .catch(err => {
        // we can handle toast messages or other ui for api errors
        console.error(err);
      });
  }, [page, debouncedSearchTerm]);

  useEffect(() => {
    setUpdatedTeamsData({ timestamp: undefined, data: [] });
  }, [debouncedSearchTerm]);

  useEffect(() => {
    if (debouncedSearchTerm === '' && page === 1) {
      window.scrollTo(0, 0);
    }
  }, [debouncedSearchTerm, page]);

  return (
    <div className="overflow-x-hidden">
      {/* Header and search section */}
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-primary text-[36px] font-romieRegular">
            {STATIC_MESSAGES.TEAM}
          </h2>
        </div>

        <div className="mb-3">
          <img className="ml-auto" src={InviteIcon} alt="Invite User" />
        </div>
      </div>
      <div className="md:flex items-center justify-between my-3">
        <div className="lg:w-80">
          <div>
            <RInput
              label="Team Name"
              placeholder="Enter User Name"
              value={nameInput}
              onChange={ev => {
                setPage(1);
                setNameInput(ev?.target?.value);
              }}
            />
          </div>
          {/* yet to implement filter functionality so commented ui */}
          {/* <div>
              <RInput
                label="Team Member Role"
                placeholder="Filter by Team Member Role"
                className="bg-gray-100"
                readOnly
                title="Member role filter will be available soon"
              />
            </div> */}
        </div>

        <div className="md:mt-0 mt-4">
          <button
            type="button"
            className="rounded-full px-4 py-2 bg-dark text-white hover:bg-blue-600 duration-300"
          >
            {STATIC_MESSAGES.INVITE_TEAM}
          </button>
        </div>
      </div>

      {/* table section */}
      <div className="relative">
        <InfiniteScroll
          dataLength={updatedTeamsData?.data?.length ?? 0}
          next={() => {
            setPage(prev => prev + 1);
          }}
          hasMore={
            !!(
              updatedTeamsData?.data &&
              updatedTeamsData?.data?.length >= 10 &&
              updatedTeamsData?.data?.length !== 50
            )
          }
          loader={null}
        >
          <table className="w-full text-sm text-left border-separate border-spacing-y-4">
            <thead className="text-[14px] text-tertiary">
              <tr className="">
                <th className="px-6 py-3">{STATIC_MESSAGES.TEAM_MEMBER}</th>
                <th className="px-6 py-3">{STATIC_MESSAGES.EMAIL}</th>
                <th className="px-6 py-3">{STATIC_MESSAGES.PHONE}</th>
                <th className="px-6 py-3">{STATIC_MESSAGES.ROLE}</th>
                <th className="px-6 py-3">
                  <span className="sr-only">{STATIC_MESSAGES.VIEW}</span>
                </th>
              </tr>
            </thead>
            <tbody>
              {updatedTeamsData?.data?.map(team => (
                <tr
                  key={team?.id}
                  className="text-dark text[16px]
                "
                >
                  <td className="md:rounded-l-full bg-white px-6 py-2">
                    <div className="flex text-dark items-center">
                      <img
                        src={team?.avatar}
                        alt="UserIcon"
                        height={36}
                        width={36}
                        className="mr-3 rounded-full"
                      />
                      <span
                        className="text-ellipsis overflow-hidden md:whitespace-nowrap whitespace-wrap w-[180px]"
                        title={team?.name}
                      >
                        {team?.name}
                      </span>
                    </div>
                  </td>
                  <td className="bg-white px-6 py-2">{team?.email}</td>
                  <td className="bg-white px-6 py-2">{team?.phone}</td>
                  <td className="bg-white px-6 py-2">{team?.role}</td>
                  <td className="md:rounded-r-full bg-white text-tertiary">
                    {STATIC_MESSAGES.VIEW}
                  </td>
                </tr>
              ))}
              {(isLoading || isFetching) && (
                <tr>
                  <td colSpan={5}>
                    <LoadingSkeleton />
                    <span className="sr-only">{STATIC_MESSAGES.LOADING}</span>
                  </td>
                </tr>
              )}
              {!isLoading && !isFetching && error && (
                <td colSpan={5}>
                  <h4 className="text-center text-dark">
                    {STATIC_MESSAGES.NO_RECORDS_FOUND}
                  </h4>
                </td>
              )}
            </tbody>
          </table>
        </InfiniteScroll>
      </div>
    </div>
  );
};

export default Teams;
