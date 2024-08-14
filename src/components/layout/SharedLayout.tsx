import { Outlet } from "react-router-dom";

const SharedLayout = () => {
  return (
    <>
      <main className="bg-secondary min-h-screen">
        <Outlet />
      </main>
    </>
  );
};

export default SharedLayout;
