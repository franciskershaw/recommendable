import { useState } from "react";

import { Outlet } from "react-router-dom";

import Sidebar from "../../ui/Sidebar/Sidebar";

const SharedLayout = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleSidebar = () => {
    setIsExpanded((prev) => !prev);
  };
  return (
    <div className="relative min-h-screen">
      <Sidebar isExpanded={isExpanded} toggleSidebar={toggleSidebar} />
      <main
        className={`${
          isExpanded ? "ml-44" : "ml-20"
        } p-4 transition-all duration-500`}
      >
        <Outlet />
      </main>
    </div>
  );
};

export default SharedLayout;
