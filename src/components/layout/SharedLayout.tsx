import { Outlet } from "react-router-dom";

import Sidebar from "../ui/Sidebar/Sidebar";

const SharedLayout = () => {
  return (
    <div className="flex h-screen">
      {/* Sidebar */}
      <Sidebar />

      {/* Main content area */}
      <main className="flex-1 bg-secondary p-4">
        <Outlet />
      </main>
    </div>
  );
};

export default SharedLayout;
