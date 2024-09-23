import { useQuery, useQueryClient } from "@tanstack/react-query";

import useAxios from "@/axios/useAxios";
import queryKeys from "@/tanstackQuery/queryKeys";
import { User } from "@/types/globalTypes";

const useUser = () => {
  const api = useAxios();
  const queryClient = useQueryClient();

  const getUser = async (): Promise<User | null> => {
    const response = await api.get("/auth/refresh-token");
    if (response && response.status === 200) {
      const user = await api.get("/users", {
        headers: {
          Authorization: `Bearer ${response.data.accessToken}`,
          "Content-Type": "application/json",
        },
      });
      return user.data;
    } else return null;
  };

  const { data: user, isFetching: fetchingUser } = useQuery<User | null>({
    queryKey: [queryKeys.user],
    queryFn: getUser,
  });

  function updateUser(newUser: User) {
    queryClient.setQueryData([queryKeys.user], newUser);
  }

  async function clearUser() {
    try {
      const response = await api.post("/api/users/logout");
      queryClient.setQueryData([queryKeys.user], null);

      return response.data;
    } catch (error) {
      console.log(error);
    }
  }

  return { user: user ?? null, fetchingUser, updateUser, clearUser };
};

export default useUser;
