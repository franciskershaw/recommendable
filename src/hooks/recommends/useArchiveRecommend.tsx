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
    try {
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
    } catch (error) {
      toast.error("Failed to archive recommendation");
      console.error("Error archiving recommendation:", error);
    }
  };

  return useMutation({
    mutationFn: archiveRecommend,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [queryKeys.recommends] });
      toast.success("Recommendation archived successfully");
    },
    onError: (error) => {
      console.error("Error archiving recommendation:", error);
    },
  });
};

export default useArchiveRecommend;
