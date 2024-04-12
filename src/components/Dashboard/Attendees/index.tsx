import InstaIcon from '../../../assets/icons/InstaIcon';
import TictokIcon from '../../../assets/icons/TictokIcon';
import TwitterIcon from '../../../assets/icons/Twitter';
import { STATIC_MESSAGES } from '../../../constants';
import LazyImage from '../../../core/LazyImage';
import { useGetEventsQuery } from '../../../services/api';
import LoadingSkeleton from '../../LoadingSkeleton';
import PlaceholderImage from '../../../assets/image/placeholder.png';

/**
 * Component to load attendees table
 *
 * @return {*}
 */
const Attendees = () => {
  const { data: events, isLoading } = useGetEventsQuery();
  return (
    <>
      <h2 className="flex-1 text-dark text-[20px] my-3 font-romieRagular lg:hidden">
        {STATIC_MESSAGES.ATTENDEES}
      </h2>
      <div className="relative overflow-x-auto">
        <table className="w-full text-sm text-left rtl:text-right text-[fontSec] bg-[#F8F8F8] rounded-[8px] lg:rounded-[0px]">
          <thead className="text-xs text-[#838282]">
            <tr>
              <th
                scope="col"
                className="min-w-[100px] p-2 text-[13px] font-normal h-[45px]"
              >
                {STATIC_MESSAGES.NAME}
              </th>
              <th scope="col" className="p-2 text-[13px] font-normal h-[45px]">
                {STATIC_MESSAGES.GUESTS}
              </th>
              <th
                scope="col"
                className="p-2 text-[13px]  h-[45px] font-normal min-w-[200px]"
              >
                {STATIC_MESSAGES.SOCIAL_MEDIA}
              </th>
            </tr>
          </thead>
          <tbody>
            {isLoading && (
              <tr>
                <td className="text-center" colSpan={4}>
                  <LoadingSkeleton containerClass="bg-[#F8F8F8]" count={4} />
                  <div className="sr-only">{STATIC_MESSAGES.LOADING}</div>
                </td>
              </tr>
            )}
            {events?.map(eventItem => (
              <tr key={eventItem?.id} className="border-b text-dark h-[66.6px]">
                <td className="min-w-[100px] px-2 whitespace-nowrap text-[14px] font-medium text-dark">
                  <div className="flex items-center">
                    <div className="h-[40px] w-[40px] flex items-center">
                      <LazyImage
                        placeholderSrc={PlaceholderImage}
                        height={32}
                        width={32}
                        className="rounded-full"
                        src={eventItem?.avatar}
                        alt="Jese icon"
                      />
                    </div>
                    <div>
                      <div
                        className="text-[14px] font-medium text-ellipsis overflow-hidden w-[100px]"
                        title={eventItem?.name}
                      >
                        {eventItem?.name}
                      </div>
                    </div>
                  </div>
                </td>
                <td className="px-2 text-[14px] font-medium text-dark">
                  {eventItem?.guests}
                </td>

                <td className="px-2 text-[14px] font-medium text-dark">
                  <div className="flex items-center flex-wrap lg:flex-nowrap social-icon">
                    <div className="flex items-center mr-2 mb-2 md:mb-0 social-item">
                      <InstaIcon /> <span className="ms-2"> 12 м </span>
                    </div>
                    <div className="flex items-center mr-2 mb-2 md:mb-0 social-item">
                      <TictokIcon /> <span className="ms-2"> 10 м </span>{' '}
                    </div>
                    <div className="flex items-center mr-2 mb-2 md:mb-0 social-item">
                      <TwitterIcon /> <span className="ms-2"> 8 м </span>{' '}
                    </div>
                    <div className="flex items-center mr-2 mb-2 md:mb-0 social-item">
                      <InstaIcon /> <span className="ms-2"> 12 м </span>
                    </div>
                    <div className="flex items-center mr-2 mb-2 md:mb-0 social-item">
                      <TictokIcon /> <span className="ms-2"> 10 м </span>{' '}
                    </div>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default Attendees;
