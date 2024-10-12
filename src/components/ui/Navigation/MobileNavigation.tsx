import {
  FaCalendar,
  FaCog,
  FaFilm,
  FaMusic,
  FaPlane,
  FaSignOutAlt,
  FaTv,
} from "react-icons/fa";

import useAuth from "@/hooks/auth/useAuth";
import useUser from "@/hooks/user/useUser";

import HamburgerBars from "./HamburgerButton";
import SidebarIcon from "./SidebarIcon";

const MobileNavigation = ({
  isExpanded,
  toggleSidebar,
}: {
  isExpanded: boolean;
  toggleSidebar: () => void;
}) => {
  const { user } = useUser();
  const { logout } = useAuth();

  if (!user) return null;

  return (
    <>
      <HamburgerBars isExpanded={isExpanded} toggleSidebar={toggleSidebar} />

      <div
        className={`fixed top-0 left-0 h-full w-full bg-primary transform ${
          isExpanded ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-500 ease-in-out z-40 md:hidden`}
      >
        <div className="flex flex-col h-full justify-between py-14">
          <div className=" flex flex-col gap-8">
            <SidebarIcon
              onClick={toggleSidebar}
              icon={<FaFilm />}
              label="Films"
              to="/films"
            />
            <SidebarIcon
              onClick={toggleSidebar}
              icon={<FaTv />}
              label="TV"
              to="/tv"
            />
            <SidebarIcon
              onClick={toggleSidebar}
              icon={<FaMusic />}
              label="Music"
              to="/music"
            />
            <SidebarIcon
              onClick={toggleSidebar}
              icon={<FaPlane />}
              label="Travel"
              to="/travel"
            />
            <SidebarIcon
              onClick={toggleSidebar}
              icon={<FaCalendar />}
              label="Events"
              to="/events"
            />
          </div>

          <div className="flex flex-col gap-8">
            <SidebarIcon icon={<FaCog />} label="Settings" to="/settings" />
            <SidebarIcon
              icon={<FaSignOutAlt />}
              label="Log Out"
              onClick={logout}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default MobileNavigation;
