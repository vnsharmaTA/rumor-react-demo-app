import { Outlet } from 'react-router-dom';
import SideBar from '../../components/Sidebar';
/**
 * Component to load landing page
 *
 * Contains sidebar and child outlet to load routes on right of sidebar
 *
 */
const LandingPage = () => (
  <div>
    <SideBar />
    <div className="p-4 sm:ml-64">
      <div className="py-[50px] px-[25px] border-2 border-gray-200 bg-secondary rounded-[32px] min-h-[calc(100svh-100px)] md:min-h-[calc(100vh-20px)]">
        <Outlet />
      </div>
    </div>
  </div>
);

export default LandingPage;
