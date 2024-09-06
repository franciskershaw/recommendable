import { useState } from "react";

import {
  FaArrowLeft,
  FaArrowRight,
  FaCog,
  FaFilm,
  FaMusic,
  FaPlane,
  FaSignInAlt,
  FaTv,
} from "react-icons/fa";

import SidebarIcon from "./SidebarIcon";

const Sidebar = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleSidebar = () => {
    setIsExpanded((prev) => !prev);
  };

  return (
    <div
      className={`${
        isExpanded ? "w-44" : "w-20"
      } h-full bg-slate-700 fixed left-0 top-0 flex flex-col py-8 transition-all duration-500 z-50`}
    >
      <div className="flex flex-col items-center space-y-8">
        <SidebarIcon
          icon={<FaCog />}
          label="Settings"
          isExpanded={isExpanded}
          to="/settings"
        />

        <SidebarIcon
          icon={<FaSignInAlt />}
          label="Log In"
          isExpanded={isExpanded}
        />
      </div>

      <div className="flex flex-col items-center space-y-12 flex-grow justify-center">
        <SidebarIcon icon={<FaFilm />} label="Films" isExpanded={isExpanded} />
        <SidebarIcon icon={<FaTv />} label="TV" isExpanded={isExpanded} />
        <SidebarIcon icon={<FaMusic />} label="Music" isExpanded={isExpanded} />
        <SidebarIcon
          icon={<FaPlane />}
          label="Travel"
          isExpanded={isExpanded}
        />
      </div>

      <button
        className={`absolute bottom-4 right-[-15px] transform bg-gray-600 p-2 rounded-full focus:outline-none transition-transform duration-500`}
        onClick={toggleSidebar}
      >
        {isExpanded ? (
          <FaArrowLeft className="text-white" />
        ) : (
          <FaArrowRight className="text-white" />
        )}
      </button>
    </div>
  );
};

export default Sidebar;
