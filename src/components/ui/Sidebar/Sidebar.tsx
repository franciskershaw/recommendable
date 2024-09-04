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

const Sidebar = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleSidebar = () => {
    setIsExpanded((prev) => !prev);
  };

  return (
    <div
      className={`${
        isExpanded ? "w-64" : "w-20"
      } h-full bg-slate-700 fixed left-0 top-0 flex flex-col py-8 transition-all duration-500 z-50`}
    >
      <div className="flex flex-col items-center space-y-8">
        <SidebarIcon
          icon={<FaCog />}
          label="Settings"
          isExpanded={isExpanded}
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

const SidebarIcon = ({
  icon,
  label,
  isExpanded,
}: {
  icon: React.ReactNode;
  label: string;
  isExpanded: boolean;
}) => {
  return (
    <div className="flex items-center w-full">
      <div className="flex-shrink-0 w-20 flex justify-center">
        <span className="text-white text-xl">{icon}</span>
      </div>

      <span
        className={`${
          isExpanded ? "opacity-100" : "opacity-0"
        } text-white text-sm whitespace-nowrap transition-opacity duration-300 ml-2`}
        style={{ width: isExpanded ? "auto" : "0px" }}
      >
        {label}
      </span>
    </div>
  );
};

export default Sidebar;
