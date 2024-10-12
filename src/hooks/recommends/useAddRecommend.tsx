import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "sonner";

import useAxios from "@/axios/useAxios";
import queryKeys from "@/tanstackQuery/queryKeys";
import { ValidCategory } from "@/types/globalTypes";

import useUser from "../user/useUser";

interface AddRecommendData {
  name: string;
  recommendedBy: string;
  category: ValidCategory;
}

const useAddRecommend = () => {
  const queryClient = useQueryClient();
  const api = useAxios();
  const { user } = useUser();

  const addRecommend = async (data: AddRecommendData) => {
    if (!user?.accessToken) {
      throw new Error("User is not authenticated");
    }

    return api.post("/recommendss", data, {
      headers: {
        Authorization: `Bearer ${user.accessToken}`,
      },
    });
  };

  // Create the mutation hook with appropriate types
  return useMutation({
    mutationFn: addRecommend,
    onSuccess: () => {
      // Errors are not being picked up, and this runs.
      queryClient.invalidateQueries({ queryKey: [queryKeys.recommends] });
      toast.success("Recommendation added successfully");
    },
    onError: (error) => {
      toast.error(error.message);
    },
  });
};

export default useAddRecommend;
