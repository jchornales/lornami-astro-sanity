import { z } from "astro/zod";

export const MessageFormSchema = z.object({
  firstName: z
    .string()
    .min(1, "This field cannot be empty")
    .min(2, "must be at least 2 characters"),
  lastName: z
    .string()
    .min(1, "This field cannot be empty")
    .min(2, "must be at least 2 characters"),
  subject: z
    .string()
    .min(1, "This field cannot be empty")
    .min(2, "must be at least 2 characters"),
  message: z
    .string()
    .min(1, "This field cannot be empty")
    .min(50, "must be at least 100 characters")
    .max(500, "must not be longer than 500 characters"),
  emailAddress: z
    .string()
    .min(1, "This field cannot be empty")
    .email("Invalid email address"),
});

export type MessageFormData = z.infer<typeof MessageFormSchema>;
