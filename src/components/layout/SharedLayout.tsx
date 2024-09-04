import { Outlet } from "react-router-dom";

import Sidebar from "../ui/Sidebar/Sidebar";

const SharedLayout = () => {
  return (
    <div className="relative min-h-screen">
      <Sidebar />
      <main className="ml-20 p-4 transition-all duration-500">
        <Outlet />
      </main>
    </div>
  );
};

export default SharedLayout;
