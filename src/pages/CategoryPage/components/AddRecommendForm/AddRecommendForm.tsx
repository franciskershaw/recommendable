import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

import { Button } from "@/components/ui/Button/Button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/Form/Form";
import { Input } from "@/components/ui/Form/Input/Input";
import { useModals } from "@/context/ModalsContext";
import useAddRecommend from "@/hooks/recommends/useAddRecommend";
import useEditRecommend from "@/hooks/recommends/useEditRecommend";
import { ValidCategory } from "@/types/globalTypes";

import { newRecommendSchema } from "./addRecommendSchema";

const AddRecommendForm = ({
  category,
  closeModal,
}: {
  category: ValidCategory;
  closeModal: () => void;
}) => {
  const { selectedRecommend } = useModals();
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

  return (
    <div className="space-y-6">
      <Form {...form}>
        <FormField
          name="name"
          control={form.control}
          render={({ field, fieldState }) => (
            <FormItem>
              <FormLabel>Name</FormLabel>
              <FormControl>
                <Input placeholder={`Enter ${category} name`} {...field} />
              </FormControl>
              {fieldState.error && (
                <FormMessage>{fieldState.error.message}</FormMessage>
              )}
            </FormItem>
          )}
        />
        <FormField
          name="recommendedBy"
          control={form.control}
          render={({ field, fieldState }) => (
            <FormItem>
              <FormLabel>Recommended By</FormLabel>
              <FormControl>
                <Input placeholder="Who recommended this?" {...field} />
              </FormControl>
              {fieldState.error && (
                <FormMessage>{fieldState.error.message}</FormMessage>
              )}
            </FormItem>
          )}
        />

        <Button onClick={form.handleSubmit(onSubmit)}>
          {selectedRecommend ? "Edit Recommendation" : "Add Recommendation"}
        </Button>
      </Form>
    </div>
  );
};

export default AddRecommendForm;
