import { useMutation, useQueryClient } from "@tanstack/react-query";

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
    try {
      if (!user?.accessToken) {
        throw new Error("User is not authenticated");
      }

      return api.post("/recommends", data, {
        headers: {
          Authorization: `Bearer ${user.accessToken}`,
        },
      });
    } catch (error) {
      console.error("Error adding recommendation:", error);
    }
  };

  // Create the mutation hook with appropriate types
  return useMutation({
    mutationFn: addRecommend,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [queryKeys.recommends] });
    },
    onError: (error) => {
      console.error("Error adding recommendation:", error);
    },
  });
};

export default useAddRecommend;
