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
import { ValidCategory } from "@/types/globalTypes";

import { newRecommendSchema } from "./utils/addRecommendSchema";

const AddRecommendForm = ({ category }: { category: ValidCategory }) => {
  // Initialize the form with default values and the Zod resolver
  const form = useForm({
    resolver: zodResolver(newRecommendSchema),
    defaultValues: {
      name: "",
      recommendedBy: "",
    },
  });

  // Submit handler function
  const onSubmit = (data: { name: string; recommendedBy: string }) => {
    // Handle the form data here (e.g., send to an API)
    console.log("Form Data:", { ...data, category });
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
