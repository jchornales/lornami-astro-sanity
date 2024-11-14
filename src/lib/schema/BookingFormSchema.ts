import { z } from "astro/zod";

export const BookingFormSchema = z.object({
  firstName: z
    .string()
    .min(1, "This field cannot be empty")
    .min(2, "must be at least 2 characters"),
  lastName: z
    .string()
    .min(1, "This field cannot be empty")
    .min(2, "must be at least 2 characters"),
  emailAddress: z
    .string()
    .min(1, "This field cannot be empty")
    .email("Invalid email address"),
  preferredDate: z.date({
    required_error: "A date of birth is required.",
  }),
});

export type BookingFormData = z.infer<typeof BookingFormSchema>;
