import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "sonner";

import useAxios from "@/axios/useAxios";
import queryKeys from "@/tanstackQuery/queryKeys";

import useUser from "../user/useUser";

interface EditRecommendData {
  _id: string;
  name: string;
  recommendedBy: string;
}

const useEditRecommend = () => {
  const queryClient = useQueryClient();
  const api = useAxios();
  const { user } = useUser();

  const editRecommend = async (data: EditRecommendData) => {
    try {
      if (!user?.accessToken) {
        throw new Error("User is not authenticated");
      }

      const { _id, ...payload } = data;

      return await api.put(`/recommends/${_id}`, payload, {
        headers: {
          Authorization: `Bearer ${user.accessToken}`,
        },
      });
    } catch (error) {
      toast.error("Failed to edit recommendation");
      console.error("Error editing recommendation:", error);
    }
  };

  return useMutation({
    mutationFn: editRecommend,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [queryKeys.recommends] });
      toast.success("Recommendation edited successfully");
    },
    onError: (error) => {
      console.error("Error editing recommendation:", error);
    },
  });
};

export default useEditRecommend;
