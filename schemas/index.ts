import * as z from "zod";

export const LoginSchema = z.object({
  email: z.string().email({ message: "Please enter a valid email" }),
  password: z.string().min(1, { message: "Password is required" }),
});

export const SignUpSchema = z.object({
  name: z.string().min(1, { message: "Name is required" }),
  email: z.string().email({ message: "Please enter a valid email" }),
  password: z
    .string()
    .min(6, { message: "Password must be at least 6 characters" }),
});

export const OrgNameSchema = z.object({
  organizationName: z
    .string()
    .min(1, { message: "Organization name is required" }),
});

export const BoardNameSchema = z.object({
  boardName: z.string().min(1, { message: "Board name is required" }),
  boardColor: z
    .string()
    .regex(new RegExp(/^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/), {
      message: "Please enter a valid hex color",
    }),
});
