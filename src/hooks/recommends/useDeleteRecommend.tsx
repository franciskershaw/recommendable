import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "sonner";

import useAxios from "@/axios/useAxios";
import queryKeys from "@/tanstackQuery/queryKeys";

import useUser from "../user/useUser";

const useDeleteRecommend = () => {
  const queryClient = useQueryClient();
  const api = useAxios();
  const { user } = useUser();

  const deleteRecommend = async (data: { _id: string }) => {
    if (!user?.accessToken) {
      throw new Error("User is not authenticated");
    }

    const { _id } = data;

    return await api.delete(`/recommends/${_id}`, {
      headers: {
        Authorization: `Bearer ${user.accessToken}`,
      },
    });
  };

  return useMutation({
    mutationFn: deleteRecommend,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [queryKeys.recommends] });
      queryClient.invalidateQueries({
        queryKey: [queryKeys.archivedRecommends],
      });
      toast.success("Recommendation deleted successfully");
    },
    onError: (error) => {
      toast.error(error.message);
    },
  });
};

export default useDeleteRecommend;
