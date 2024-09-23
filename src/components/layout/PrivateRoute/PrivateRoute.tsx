import { Navigate, Outlet } from "react-router-dom";

import useUser from "@/hooks/user/useUser";

const PrivateRoute = (): JSX.Element => {
  const { user } = useUser();
  return user ? <Outlet /> : <Navigate to="/" />;
};

export default PrivateRoute;
