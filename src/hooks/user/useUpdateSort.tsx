import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "sonner";

import useAxios from "@/axios/useAxios";
import queryKeys from "@/tanstackQuery/queryKeys";
import { SortOption, User, ValidCategory } from "@/types/globalTypes";

import useUser from "./useUser";

type PartialSortPreferences = Partial<{
  [key in ValidCategory]: SortOption;
}>;

const useUpdateSort = () => {
  const queryClient = useQueryClient();
  const api = useAxios();
  const { user } = useUser();

  const updateSortPreference = async (data: {
    sortPreferences: PartialSortPreferences;
  }) => {
    if (!user?.accessToken) {
      throw new Error("User is not authenticated");
    }

    return await api.patch("/users/preferences", data, {
      headers: {
        Authorization: `Bearer ${user.accessToken}`,
      },
    });
  };

  return useMutation({
    mutationFn: updateSortPreference,
    onMutate: async (newData) => {
      await queryClient.cancelQueries({ queryKey: [queryKeys.user] });

      const previousData = queryClient.getQueryData([queryKeys.user]);

      queryClient.setQueryData([queryKeys.user], (old: User) => {
        if (!old) return old;

        return {
          ...old,
          sortPreferences: {
            ...old.sortPreferences,
            ...newData.sortPreferences,
          },
        };
      });

      return { previousData };
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [queryKeys.user] });
      toast.success("Sort preference updated successfully");
    },
    onError: (error, _, context) => {
      queryClient.setQueryData([queryKeys.user], context?.previousData);
      toast.error(error.message);
    },
    onSettled: () => {
      queryClient.invalidateQueries({ queryKey: [queryKeys.user] });
    },
  });
};

export default useUpdateSort;
