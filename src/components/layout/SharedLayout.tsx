import { Outlet } from "react-router-dom";

const SharedLayout = () => {
  return (
    <main className="bg-secondary">
      <Outlet />
    </main>
  );
};

export default SharedLayout;
