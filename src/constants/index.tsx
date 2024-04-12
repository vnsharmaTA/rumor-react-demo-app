import { RouteObject } from 'react-router-dom';
import LandingPage from '../pages/Landing';
import DashboardIcon from '../assets/icons/DashboardIcon';
import EventsIcon from '../assets/icons/EventsIcon';
import ChatIcon from '../assets/icons/ChatIcon';
import UsersIcon from '../assets/icons/UsersIcon';
import TeamsIcon from '../assets/icons/TeamsIcon';
import SettingsIcon from '../assets/icons/SettingsIcon';
import Teams from '../pages/Teams';
import DashboardPage from '../pages/Dashboard';
import { IEventCardProps } from '../types';
import StarIcon from '../assets/icons/StarIcon';
import DashboardUsersIcon from '../assets/icons/DashboardUsersIcon';
import DashboardGlobeIcon from '../assets/icons/DashboardGlobeIcon';
import DashboardThumbIcon from '../assets/icons/DashboardThumbIcon';
import ComingSoon from '../components/ComingSoon';

export const PATHS = {
  HOME: '/',
  EVENTS: '/events',
  CHAT: '/chat',
  USERS: '/users',
  TEAM: '/team',
  SETTINGS: '/settings',
};

export const ROUTES: RouteObject[] = [
  {
    path: PATHS.HOME,
    element: <LandingPage />,
    errorElement: <div className="text-dark"> Page not found </div>,
    children: [
      {
        path: '/',
        element: <DashboardPage />,
      },
      {
        path: PATHS.TEAM,
        element: <Teams />,
      },
      {
        path: PATHS.USERS,
        element: <ComingSoon />,
      },
      {
        path: PATHS.TEAM,
        element: <ComingSoon />,
      },
      {
        path: PATHS.SETTINGS,
        element: <ComingSoon />,
      },
      {
        path: PATHS.CHAT,
        element: <ComingSoon />,
      },
      {
        path: PATHS.EVENTS,
        element: <ComingSoon />,
      },
    ],
  },
];

export const SIDEBARTABS = [
  {
    name: 'Dashboard',
    icon: <DashboardIcon />,
    route: PATHS.HOME,
  },
  {
    name: 'Events',
    icon: <EventsIcon />,
    route: PATHS.EVENTS,
  },
  {
    name: 'Chat',
    icon: <ChatIcon />,
    route: PATHS.CHAT,
  },
  {
    name: 'Users',
    icon: <UsersIcon />,
    route: PATHS.USERS,
  },
  {
    name: 'Team',
    icon: <TeamsIcon />,
    route: PATHS.TEAM,
  },
  {
    name: 'Settings',
    icon: <SettingsIcon />,
    route: PATHS.SETTINGS,
  },
];

export const DASHBOARD_CARDS: Array<IEventCardProps> = [
  {
    bgClass: 'bg-event-card',
    count: '15',
    icon: <StarIcon />,
    title: '# of rumor events',
  },
  {
    bgClass: 'bg-attendees-card',
    count: '28,650',
    icon: <DashboardUsersIcon />,
    title: 'attendees',
    textColorClass: 'text-dark',
  },
  {
    bgClass: 'bg-event-card',
    count: '62b',
    icon: <DashboardGlobeIcon />,
    title: 'combined attending social media',
  },
  {
    bgClass: 'bg-attendees-card',
    count: '146b',
    icon: <DashboardThumbIcon />,
    title: 'estimated media reach',
    textColorClass: 'text-dark',
  },
];

export const STATIC_MESSAGES = {
  TEAM: 'Team',
  INVITE_TEAM: 'Invite Team',
  NO_RECORDS_FOUND: 'No records found',
  TEAM_MEMBER: 'Team Member',
  EMAIL: 'Email',
  PHONE: 'Phone',
  ROLE: 'Role',
  VIEW: 'View',
  LOADING: 'Loading...',
  WELCOME: 'Welcome',
  USER_NAME: 'Sarah Martins',
  EVENTS: 'Events',
  ALL_EVENTS: 'All Time',
  THIS_MONTH: 'This Month',
  THIS_YEAR: 'This Year',
  LAST_MONTH: 'Last Month',
  LAST_YEAR: 'Last Year',
  UPCOMING_EVENTS: 'Upcoming events',
  ATTENDEES: 'Attendees',
  DATE: 'Date',
  MANAGE: 'Manage',
  GUESTS: 'Guests',
  NAME: 'Name',
  SOCIAL_MEDIA: 'Social Media',
  COMING_SOON: 'Coming Soon!',
  OPEN_SIDEBAR: 'Open sidebar',
  DRAWER_BACKDROP: 'Drawer Backdrop',
};
