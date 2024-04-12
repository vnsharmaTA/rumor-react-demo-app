import { FC } from 'react';
import FilterIcon from '../../../assets/icons/FilterIcon';
import { IEventCardProps } from '../../../types';

/**
 * Component to load event cards in dashboard
 *
 * @param {*} {
 *   bgClass,
 *   count,
 *   icon,
 *   title,
 *   textColorClass,
 * }
 */
const EventCard: FC<IEventCardProps> = ({
  bgClass,
  count,
  icon,
  title,
  textColorClass,
}) => (
  <div className={`mr-3 p-3 pb-0 rounded-[21px] lg:mb-0 mb-5 ${bgClass}`}>
    <div className="flex justify-between items-center">
      <div
        className={`text-[14px] capitalize text-[fontSec] font-normal	${
          textColorClass ?? 'text-event-text'
        }`}
      >
        {title}
      </div>
      <div className="h-[39px] w-[39px]">{icon}</div>
    </div>
    <div className="flex justify-between items-baseline relative">
      <div
        className={`text-[50px] lg:text-[64px] font-romieRegular ${
          textColorClass ?? 'text-white'
        }`}
      >
        {count}
      </div>
      <div className="absolute bottom-[13px] right-0">
        <FilterIcon />
      </div>
    </div>
  </div>
);

export default EventCard;
