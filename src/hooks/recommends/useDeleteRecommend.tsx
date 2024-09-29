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
    try {
      if (!user?.accessToken) {
        throw new Error("User is not authenticated");
      }

      const { _id } = data;

      return await api.delete(`/recommends/${_id}`, {
        headers: {
          Authorization: `Bearer ${user.accessToken}`,
        },
      });
    } catch (error) {
      toast.error("Failed to delete recommendation");
      console.error("Error delete recommendation:", error);
    }
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
      console.error("Error deleting recommendation:", error);
    },
  });
};

export default useDeleteRecommend;
