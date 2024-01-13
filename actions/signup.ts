"use server";

import * as z from "zod";
import bcrypt from "bcryptjs";

import { SignUpSchema } from "@/schemas/index";
import prisma from "@/lib/db";
import { get } from "http";
import { getUserByEmail } from "@/data/user";

export const signup = async (values: z.infer<typeof SignUpSchema>) => {
  const validatedFields = SignUpSchema.safeParse(values);

  if (!validatedFields.success) {
    return { error: "Invalid fields" };
  }

  const { name, email, password } = validatedFields.data;
  const hashedPassword = await bcrypt.hash(password, 10);

  const ifExistingUser = await getUserByEmail(email);

  if (ifExistingUser) {
    return { error: "Email already exists" };
  }

  await prisma.user.create({
    data: {
      name: name,
      email: email,
      password: hashedPassword,
    },
  });

  return { success: "User created!" };
};
