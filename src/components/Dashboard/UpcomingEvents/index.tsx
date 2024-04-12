import { STATIC_MESSAGES } from '../../../constants';
import LazyImage from '../../../core/LazyImage';
import { useGetEventsQuery } from '../../../services/api';
import { formateDateToDot } from '../../../utils/helpers';
import LoadingSkeleton from '../../LoadingSkeleton';
import PlaceholderImage from '../../../assets/image/placeholder.png';

/**
 * Component to load upcoming events
 *
 * @return {*}
 */
const UpcomingEvents = () => {
  const { data: events, isLoading } = useGetEventsQuery();
  return (
    <>
      <h2 className="flex-1 text-dark text-[20px] font-medium my-3 font-romieRegular lg:hidden">
        {STATIC_MESSAGES.UPCOMING_EVENTS}
      </h2>
      <div className="relative overflow-x-auto">
        <table className="w-full text-sm text-left rtl:text-right text-[fontSec] bg-[#F8F8F8] rounded-[8px] md:rounded-[0px]">
          <thead className="text-[#838282]">
            <tr className="h-[45px]">
              <th
                scope="col"
                className="p-2 text-[13px] font-normal lg:w-[120px]"
              >
                {STATIC_MESSAGES.EVENTS}
              </th>
              <th scope="col" className="p-2 text-[13px] font-normal">
                {STATIC_MESSAGES.DATE}
              </th>
              <th scope="col" className="p-2 text-[13px] font-normal">
                {STATIC_MESSAGES.ATTENDEES}
              </th>
              <th scope="col" className="p-2 text-[13px] font-normal">
                {STATIC_MESSAGES.MANAGE}
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
            {events?.map(eventItem => {
              let progressbarWidth = ``;
              if (eventItem?.attendee1 > eventItem?.attendee2) {
                progressbarWidth = `${Math.round(
                  (eventItem.attendee2 / eventItem.attendee1) * 100,
                )}%`;
              } else {
                progressbarWidth = `${Math.round(
                  (eventItem.attendee1 / eventItem.attendee2) * 100,
                )}%`;
              }
              return (
                <tr key={eventItem?.id} className="border-b text-dark h-[55px]">
                  <td className="flex items-center p-2 font-medium whitespace-nowrap text-[14px] text-dark">
                    <div className="h-[50px] w-[50px] flex items-center">
                      <LazyImage
                        placeholderSrc={PlaceholderImage}
                        height={44}
                        width={44}
                        className="rounded-[8px] object-cover"
                        src={eventItem?.eventImage}
                        alt="Jese icon"
                      />
                    </div>
                    <div className="ps-3 lg:w-full lg:w-[120px] break-words">
                      <div
                        className="text-[14px] font-medium text-ellipsis overflow-hidden md:whitespace-nowrap whitespace-wrap w-[100px]"
                        title={eventItem?.eventName}
                      >
                        {eventItem?.eventName}
                      </div>
                    </div>
                  </td>
                  <td className="p-2 text-[14px] font-medium text-dark">
                    <span>{formateDateToDot(eventItem?.createdAt)}</span>
                  </td>
                  <td className="p-2 text-[14px] font-medium text-dark">
                    <div className="flex items-center">
                      <div className="w-[50px] rounded-full h-1.5  bg-gray-200 mr-3">
                        <div
                          className="bg-dark h-1.5 rounded-full"
                          style={{ width: progressbarWidth }}
                        />
                      </div>
                      <span>
                        {eventItem?.attendee1 > eventItem?.attendee2
                          ? `${eventItem?.attendee2} / ${eventItem?.attendee1}`
                          : `${eventItem?.attendee1} / ${eventItem?.attendee2}`}
                      </span>
                    </div>
                  </td>
                  <td className="p-2">
                    <span className="px-3 text-[#7D9559] bg-[#D1E1BA] rounded-full text-[10px] w-full inline-block text-center">
                      {STATIC_MESSAGES.MANAGE}
                    </span>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default UpcomingEvents;
