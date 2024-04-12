import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import useIsMobile from '../../hooks/useIsMobile';
import { PATHS, SIDEBARTABS, STATIC_MESSAGES } from '../../constants';
import LogoIcon from '../../assets/logo.svg';
import SidebarIcon from '../../assets/icons/SidebarIcon';
import LogoSmIcon from '../../assets/icons/logo-sm';

/**
 * Component to load side bar component and handle navigations
 *
 * @return {*}
 */
const SideBar = () => {
  const [isSideBarOpen, setIsSideBarOpen] = useState(false);
  const isMobile = useIsMobile();
  const { pathname } = useLocation();

  useEffect(() => {
    if (isMobile) {
      setIsSideBarOpen(false);
    }
  }, [pathname, isMobile]);
  return (
    <>
      {isMobile && isSideBarOpen && (
        <button
          type="button"
          onClick={() => {
            setIsSideBarOpen(false);
          }}
          className="bg-gray-900/50 dark:bg-gray-900/80 fixed inset-0 z-30"
        >
          <span className="sr-only">{STATIC_MESSAGES.DRAWER_BACKDROP}</span>
        </button>
      )}
      <div className="lg:hidden flex items-center justify-between">
        <button
          type="button"
          onClick={() => {
            setIsSideBarOpen(prev => !prev);
          }}
          className="inline-flex items-center p-2 mt-2 ms-3 text-sm rounded-lg sm:hidden hover:bg-gray-100 focus:outline-none focus:ring-2"
        >
          <span className="sr-only">{STATIC_MESSAGES.OPEN_SIDEBAR}</span>
          <SidebarIcon />
        </button>

        <Link to={PATHS.HOME} className="flex items-center p-2.5">
          <LogoSmIcon />
        </Link>
      </div>
      <aside
        className={`fixed top-0 left-0 z-40 w-64 h-screen transition-transform ${
          isMobile && !isSideBarOpen ? '-translate-x-full sm:translate-x-0' : ''
        }`}
        aria-label="Sidebar"
      >
        <div className="bg-primary h-full px-3 pb-[45px] pt-[65px] overflow-y-auto">
          <Link to={PATHS.HOME} className="flex items-center ps-2.5 mb-5">
            <img src={LogoIcon} className="mb-5" alt="Logo" />
          </Link>
          <ul className="space-y-2 font-medium">
            {SIDEBARTABS.map(item => (
              <li key={item?.name}>
                <Link
                  to={item?.route}
                  className={`flex items-center rounded-[37px] px-[20px] py-[10px] hover:bg-white hover:text-dark ${
                    pathname === item?.route
                      ? 'bg-white text-dark'
                      : 'text-tertiary'
                  }`}
                >
                  <span className="mt-[-5px]">{item?.icon}</span>
                  <span className="ms-4">{item?.name}</span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </aside>
    </>
  );
};

export default SideBar;
