import { z } from "zod";

export const newRecommendSchema = z.object({
  name: z
    .string()
    .trim()
    .max(50, { message: "Name cannot be more than 50 characters" })
    .min(1, { message: "Please add a name" }),
  recommendedBy: z
    .string()
    .trim()
    .max(50, { message: "Name cannot be more than 50 characters" })
    .optional(),
});
