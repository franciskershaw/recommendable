import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

import { useModals } from "@/context/ModalsContext";
import useAddRecommend from "@/hooks/recommends/useAddRecommend";
import useEditRecommend from "@/hooks/recommends/useEditRecommend";
import { ValidCategory } from "@/types/globalTypes";

import { newRecommendSchema } from "./addRecommendSchema";

const useAddRecommendForm = (category: ValidCategory) => {
  const { selectedRecommend, closeModal } = useModals();
  const form = useForm({
    resolver: zodResolver(newRecommendSchema),
    defaultValues: {
      name: selectedRecommend?.name || "",
      recommendedBy: selectedRecommend?.recommendedBy || "",
    },
  });

  const addRecommend = useAddRecommend();
  const editRecommend = useEditRecommend();

  const handleSuccess = () => {
    form.reset();
    closeModal();
  };

  const onSubmit = (data: { name: string; recommendedBy: string }) => {
    if (selectedRecommend) {
      editRecommend.mutate(
        { ...data, _id: selectedRecommend._id },
        { onSuccess: handleSuccess }
      );
    } else {
      addRecommend.mutate({ ...data, category }, { onSuccess: handleSuccess });
    }
  };
  return { onSubmit };
};

export default useAddRecommendForm;
