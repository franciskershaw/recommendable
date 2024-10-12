import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "sonner";

import useAxios from "@/axios/useAxios";
import queryKeys from "@/tanstackQuery/queryKeys";

import useUser from "../user/useUser";

const useUnarchiveRecommend = () => {
  const queryClient = useQueryClient();
  const api = useAxios();
  const { user } = useUser();

  const unarchiveRecommend = async (data: { _id: string }) => {
    if (!user?.accessToken) {
      throw new Error("User is not authenticated");
    }

    const { _id } = data;

    return await api.put(
      `/recommends/${_id}/unarchive`,
      {},
      {
        headers: {
          Authorization: `Bearer ${user.accessToken}`,
        },
      }
    );
  };

  return useMutation({
    mutationFn: unarchiveRecommend,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [queryKeys.recommends] });
      queryClient.invalidateQueries({
        queryKey: [queryKeys.archivedRecommends],
      });
      toast.success("Recommendation reactivated successfully");
    },
    onError: (error) => {
      toast.error(error.message);
    },
  });
};

export default useUnarchiveRecommend;
