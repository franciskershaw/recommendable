import { useState } from "react";

import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

const Sidebar = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleSidebar = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div
      className={`${
        isExpanded ? "w-64" : "w-20"
      } h-full bg-slate-700 flex flex-col items-center py-4 transition-all duration-300 relative`}
    >
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

export default Sidebar;
