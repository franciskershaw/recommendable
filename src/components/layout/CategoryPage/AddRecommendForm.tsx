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
import useAddRecommend from "@/hooks/recommends/useAddRecommend";
import { ValidCategory } from "@/types/globalTypes";

import { newRecommendSchema } from "./utils/addRecommendSchema";

const AddRecommendForm = ({
  category,
  closeModal,
}: {
  category: ValidCategory;
  closeModal: () => void;
}) => {
  const form = useForm({
    resolver: zodResolver(newRecommendSchema),
    defaultValues: {
      name: "",
      recommendedBy: "",
    },
  });

  const addRecommend = useAddRecommend();

  const onSubmit = (data: { name: string; recommendedBy: string }) => {
    addRecommend.mutate(
      { ...data, category },
      {
        onSuccess: () => {
          form.reset();
          closeModal();
        },
      }
    );
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
          Add Recommendation
        </Button>
      </Form>
    </div>
  );
};

export default AddRecommendForm;
