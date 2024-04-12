import { DASHBOARD_CARDS, STATIC_MESSAGES } from '../../constants';
import Attendees from './Attendees';
import EventCard from './EventCard';
import UpcomingEvents from './UpcomingEvents';
import InviteIcon from '../../assets/image/inviteIcon.png';
import CalendarIcon from '../../assets/image/calendar.svg';

/**
 * Component to load dashboard view
 *
 * Loading upcoming events and attendees from api
 *
 */
const Dashboard = () => (
  <div>
    <div className="flex items-center justify-between">
      <div>
        <h1 className="text-lightDark text-[16px] font-romieRegular">
          {STATIC_MESSAGES.WELCOME}
        </h1>
        <h2 className="text-primary text-[36px] font-romieRegular">
          {STATIC_MESSAGES.USER_NAME}
        </h2>
      </div>

      <div className="mb-3">
        <img className="ml-auto" src={InviteIcon} alt="Invite User" />
      </div>
    </div>

    <h2 className="text-dark text-[24px] font-medium font-romieRegular">
      {STATIC_MESSAGES.EVENTS}
    </h2>

    <div className="lg:flex-nowrap flex-wrap flex items-center mt-[20px] mb-[30px]">
      <div className="lg:mb-0 mb-3 h-[36px] flex items-center min-w-[126px] justify-center mr-3  text-white rounded-[30px] text-[14px] font-light cursor-pointer hover:bg-dark hover:text-white active:bg-dark active:text-white bg-primary leading-[16px]">
        {STATIC_MESSAGES.ALL_EVENTS}
      </div>
      <div className="md:mb-0 mb-3 h-[36px] flex items-center min-w-[126px] justify-center mr-3 bg-white text-primary rounded-[30px] text-[14px] font-light cursor-pointer hover:bg-dark hover:text-white active:bg-dark active:text-white leading-[16px]">
        {' '}
        {STATIC_MESSAGES.THIS_MONTH}{' '}
      </div>
      <div className="md:mb-0 mb-3 h-[36px] flex items-center min-w-[126px] justify-center mr-3 bg-white text-primary rounded-[30px] text-[14px] font-light cursor-pointer hover:bg-dark hover:text-white active:bg-dark active:text-white leading-[16px]">
        {' '}
        {STATIC_MESSAGES.THIS_YEAR}{' '}
      </div>
      <div className="md:mb-0 mb-3 h-[36px] flex items-center min-w-[126px] justify-center mr-3 bg-white text-primary rounded-[30px] text-[14px] font-light cursor-pointer hover:bg-dark hover:text-white active:bg-dark active:text-white leading-[16px]">
        {' '}
        {STATIC_MESSAGES.LAST_MONTH}{' '}
      </div>
      <div className="md:mb-0 mb-3 h-[36px] flex items-center min-w-[126px] justify-center mr-3 bg-white text-primary rounded-[30px] text-[14px] font-light cursor-pointer hover:bg-dark hover:text-white active:bg-dark active:text-white leading-[16px]">
        {' '}
        {STATIC_MESSAGES.LAST_YEAR}{' '}
      </div>
      <div className="cursor-pointer">
        <img src={CalendarIcon} alt="Calendar" />
      </div>
    </div>

    <div className="lg:flex items-center">
      {DASHBOARD_CARDS.map(cardItem => (
        <div key={cardItem?.title} className="flex-1">
          <EventCard
            bgClass={cardItem?.bgClass}
            count={cardItem?.count}
            icon={cardItem?.icon}
            title={cardItem?.title}
            textColorClass={cardItem?.textColorClass}
          />
        </div>
      ))}
    </div>
    <div className="lg:flex my-3 hidden">
      <h2 className="flex-1 text-dark text-[20px] font-medium my-3 font-romieRegular">
        {STATIC_MESSAGES.UPCOMING_EVENTS}
      </h2>
      <h2 className="flex-1 text-dark text-[20px] my-3 font-romieRegular lg:ml-[0] md:ml-[65px]">
        {STATIC_MESSAGES.ATTENDEES}
      </h2>
    </div>
    <div className="md:flex my-3 items-stretch lg:flex-row md:flex-col">
      <div className="flex-1 mr-3 lg:bg-[#F8F8F8] rounded-[8px] md:mb-5 lg:mb-0">
        <UpcomingEvents />
      </div>
      <div className="flex-1 lg:bg-[#F8F8F8] rounded-[8px]">
        <Attendees />
      </div>
    </div>
  </div>
);

export default Dashboard;
