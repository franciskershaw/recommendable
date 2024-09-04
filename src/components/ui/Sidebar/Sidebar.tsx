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
      } h-full bg-slate-700 flex flex-col py-8 transition-all duration-300 relative`}
    >
      {/* Top Section: Settings + Auth */}
      <div className="flex flex-col items-center space-y-8">
        {/* Admin/Settings */}
        <SidebarIcon
          icon={<FaCog />}
          label="Settings"
          isExpanded={isExpanded}
        />

        {/* Log In/Log Out */}
        <SidebarIcon
          icon={<FaSignInAlt />}
          label="Log In"
          isExpanded={isExpanded}
        />
        {/* If user is logged in, replace with FaSignOutAlt */}
        {/* <SidebarIcon icon={<FaSignOutAlt />} label="Log Out" isExpanded={isExpanded} /> */}
      </div>

      {/* Middle Section: Main Categories */}
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

      {/* Bottom Section: Toggle button */}
      <button
        className={`absolute bottom-4 right-[-15px] transform bg-gray-600 p-2 rounded-full focus:outline-none transition-transform duration-300`}
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

// Component for individual icons
const SidebarIcon = ({
  icon,
  //   label,
  //   isExpanded,
}: {
  icon: React.ReactNode;
  label: string;
  isExpanded: boolean;
}) => {
  return (
    <div className="flex items-center space-x-2">
      <span className="text-white text-xl">{icon}</span>
      {/* {isExpanded && <span className="text-white">{label}</span>} */}
    </div>
  );
};

export default Sidebar;
