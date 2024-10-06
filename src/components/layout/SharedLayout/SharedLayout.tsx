import { useState } from "react";

import { Outlet } from "react-router-dom";

import MobileNavigation from "@/components/ui/Navigation/MobileNavigation";
import { Toaster } from "@/components/ui/Toaster/Toaster";

import Sidebar from "../../ui/Navigation/Sidebar";

const SharedLayout = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleSidebar = () => {
    setIsExpanded((prev) => !prev);
  };

  return (
    <div className="relative min-h-screen">
      <div className="hidden md:block">
        <Sidebar isExpanded={isExpanded} toggleSidebar={toggleSidebar} />
      </div>

      <MobileNavigation isExpanded={isExpanded} toggleSidebar={toggleSidebar} />

      <main
        className={`${
          isExpanded ? "md:ml-44" : "md:ml-20"
        } p-4 transition-all duration-500`}
      >
        <Outlet />
      </main>
      <Toaster />
    </div>
  );
};
export default SharedLayout;
