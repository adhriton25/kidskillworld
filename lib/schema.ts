import { z } from "zod";

export const SignUpSchema = z.object({
  name: z.string().min(2, "Name is required"),
  email: z.string().email("Please enter a valid email address"),
  grade: z.string().min(1, "Please select a grade"),
  password: z
    .string()
    .min(6, "Minimum 6 characters")
    .regex(/[a-zA-Z]/, "Must include at least 1 letter")
    .regex(/[0-9]/, "Must include at least 1 number")
    .refine((s) => !s.includes(" "), "No spaces allowed"),
});

export type SignUpInput = z.infer<typeof SignUpSchema>;