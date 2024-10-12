import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "sonner";

import useAxios from "@/axios/useAxios";
import queryKeys from "@/tanstackQuery/queryKeys";

import useUser from "../user/useUser";

const useArchiveRecommend = () => {
  const queryClient = useQueryClient();
  const api = useAxios();
  const { user } = useUser();

  const archiveRecommend = async (data: { _id: string }) => {
    if (!user?.accessToken) {
      throw new Error("User is not authenticated");
    }

    const { _id } = data;

    return await api.put(
      `/recommends/${_id}/archive`,
      {},
      {
        headers: {
          Authorization: `Bearer ${user.accessToken}`,
        },
      }
    );
  };

  return useMutation({
    mutationFn: archiveRecommend,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [queryKeys.recommends] });
      queryClient.invalidateQueries({
        queryKey: [queryKeys.archivedRecommends],
      });
      toast.success("Recommendation archived successfully");
    },
    onError: (error) => {
      toast.error(error.message);
    },
  });
};

export default useArchiveRecommend;
