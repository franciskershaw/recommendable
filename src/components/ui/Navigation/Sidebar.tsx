import {
  FaArrowLeft,
  FaArrowRight,
  FaCalendar,
  // FaCog,
  FaFilm,
  FaMusic,
  FaPlane,
  FaSignOutAlt,
  FaTv,
} from "react-icons/fa";

import useAuth from "@/hooks/auth/useAuth";
import useUser from "@/hooks/user/useUser";

import SidebarIcon from "./SidebarIcon";

const Sidebar = ({
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
    <div
      className={`${
        isExpanded ? "w-44" : "w-20"
      } h-full bg-primary text-primary-foreground fixed left-0 top-0 flex flex-col justify-between py-8 transition-all duration-500 z-50`}
    >
      <div className="flex flex-col items-center space-y-12 justify-center">
        <SidebarIcon
          icon={<FaFilm />}
          label="Films"
          isExpanded={isExpanded}
          to="/films"
        />
        <SidebarIcon
          icon={<FaTv />}
          label="TV"
          isExpanded={isExpanded}
          to="/tv"
        />
        <SidebarIcon
          icon={<FaMusic />}
          label="Music"
          isExpanded={isExpanded}
          to="/music"
        />
        <SidebarIcon
          icon={<FaPlane />}
          label="Travel"
          isExpanded={isExpanded}
          to="/travel"
        />
        <SidebarIcon
          icon={<FaCalendar />}
          label="Events"
          isExpanded={isExpanded}
          to="/events"
        />
      </div>

      {/* <div className="flex flex-col items-center space-y-8">
        <SidebarIcon
          icon={<FaCog />}
          label="Settings"
          isExpanded={isExpanded}
          to="/settings"
        /> */}

      <SidebarIcon
        icon={<FaSignOutAlt />}
        label="Log Out"
        isExpanded={isExpanded}
        onClick={logout}
      />
      {/* </div> */}

      <button
        className={`absolute bottom-4 right-[-15px] transform bg-secondary text-secondary-foreground p-2 rounded-full focus:outline-none transition-transform duration-500`}
        onClick={toggleSidebar}
      >
        {isExpanded ? <FaArrowLeft /> : <FaArrowRight />}
      </button>
    </div>
  );
};

export default Sidebar;
