import { useState } from "react";

import { Outlet, useLocation } from "react-router-dom";

import Loading from "@/components/ui/Loading/Loading";
import MobileNavigation from "@/components/ui/Navigation/MobileNavigation";
import { Toaster } from "@/components/ui/Toaster/Toaster";
import useUser from "@/hooks/user/useUser";

import Sidebar from "../../ui/Navigation/Sidebar";

const SharedLayout = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const { fetchingUser, user } = useUser();

  const location = useLocation();

  const toggleSidebar = () => {
    setIsExpanded((prev) => !prev);
  };

  if (!user && fetchingUser) {
    return <Loading />;
  }

  return (
    <div className="relative min-h-screen">
      <div className="hidden md:block">
        <Sidebar isExpanded={isExpanded} toggleSidebar={toggleSidebar} />
      </div>

      <MobileNavigation isExpanded={isExpanded} toggleSidebar={toggleSidebar} />

      <main
        className={`${
          isExpanded ? "md:ml-64" : location.pathname === "/" ? "" : "md:ml-20"
        } px-4 transition-all duration-500`}
      >
        <Outlet />
      </main>
      <Toaster />
    </div>
  );
};

export default SharedLayout;
