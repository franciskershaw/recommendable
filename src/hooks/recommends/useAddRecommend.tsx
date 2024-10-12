import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "sonner";

import useAxios from "@/axios/useAxios";
import queryKeys from "@/tanstackQuery/queryKeys";
import { Recommend, ValidCategory } from "@/types/globalTypes";

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

    return api.post("/recommends", data, {
      headers: {
        Authorization: `Bearer ${user.accessToken}`,
      },
    });
  };

  // Create the mutation hook with appropriate types
  return useMutation({
    mutationFn: addRecommend,
    onMutate: async (newRecommend) => {
      await queryClient.cancelQueries({ queryKey: [queryKeys.recommends] });

      const previousRecommends = queryClient.getQueryData([
        queryKeys.recommends,
      ]);

      queryClient.setQueryData(
        [queryKeys.recommends],
        (old: Record<ValidCategory, Recommend[]> | undefined) => {
          if (!old) return old;
          const category = newRecommend.category;

          return {
            ...old,
            [category]: [
              ...(old[category] || []),
              {
                ...newRecommend,
                _id: Date.now().toString(),
                createdAt: new Date().toISOString(),
                updatedAt: new Date().toISOString(),
                isArchived: false,
              },
            ],
          };
        }
      );

      return { previousRecommends };
    },
    onError: (error, _, context) => {
      queryClient.setQueryData(
        [queryKeys.recommends],
        context?.previousRecommends
      );
      toast.error(error.message);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [queryKeys.recommends] });
      toast.success("Recommendation added successfully");
    },
    onSettled: () => {
      queryClient.invalidateQueries({ queryKey: [queryKeys.recommends] });
    },
  });
};

export default useAddRecommend;
