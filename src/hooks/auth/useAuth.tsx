import useUser from "../user/useUser";

const useAuth = () => {
  const { clearUser } = useUser();
  const logout = async () => {
    clearUser();
  };

  return { logout };
};

export default useAuth;
