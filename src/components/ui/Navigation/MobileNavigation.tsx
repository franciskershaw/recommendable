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
      <button
        className={`fixed top-4 right-4 z-50 md:hidden transition-all duration-200`}
        onClick={toggleSidebar}
      >
        <div className="relative flex overflow-hidden items-center justify-center rounded-full w-10 h-10 transform transition-all bg-slate-700">
          <div className="flex flex-col justify-between w-5 h-5 transform transition-all duration-300 origin-center overflow-hidden">
            <div
              className={`bg-white h-[2px] w-7 transform transition-all duration-300 origin-left ${
                isExpanded ? "translate-x-10" : ""
              }`}
            ></div>
            <div
              className={`bg-white h-[2px] w-7 rounded transform transition-all duration-300 delay-75 ${
                isExpanded ? "translate-x-10" : ""
              }`}
            ></div>
            <div
              className={`bg-white h-[2px] w-7 transform transition-all duration-300 origin-left delay-150 ${
                isExpanded ? "translate-x-10" : ""
              }`}
            ></div>

            <div
              className={`absolute items-center justify-between transform transition-all duration-500 top-2.5 flex ${
                isExpanded ? "translate-x-0 w-12" : "-translate-x-10 w-0"
              }`}
            >
              <div
                className={`absolute bg-white h-[2px] w-5 transform transition-all duration-500 delay-300 ${
                  isExpanded ? "rotate-45" : "rotate-0"
                }`}
              ></div>
              <div
                className={`absolute bg-white h-[2px] w-5 transform transition-all duration-500 delay-300 ${
                  isExpanded ? "-rotate-45" : "rotate-0"
                }`}
              ></div>
            </div>
          </div>
        </div>
      </button>

      <div
        className={`fixed top-0 left-0 h-full w-full bg-slate-700 transform ${
          isExpanded ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-500 ease-in-out z-40 md:hidden`}
      >
        <div className="flex flex-col h-full justify-between py-14">
          <div className=" flex flex-col gap-8">
            <SidebarIcon icon={<FaFilm />} label="Films" to="/films" />
            <SidebarIcon icon={<FaTv />} label="TV" to="/tv" />
            <SidebarIcon icon={<FaMusic />} label="Music" to="/music" />
            <SidebarIcon icon={<FaPlane />} label="Travel" to="/travel" />
            <SidebarIcon icon={<FaCalendar />} label="Events" to="/events" />
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
