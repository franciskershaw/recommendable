import { toast } from "sonner";

import useUser from "../user/useUser";

const useAuth = () => {
  const { clearUser } = useUser();
  const logout = async () => {
    clearUser();
    toast.success("You have been logged out.");
  };

  return { logout };
};

export default useAuth;
