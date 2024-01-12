"use server";

import * as z from "zod";
import bcrypt from "bcryptjs";

import { SignUpSchema } from "@/schemas/index";
import { doQuery } from "@/lib/db";

export const signup = async (values: z.infer<typeof SignUpSchema>) => {
  const validatedFields = SignUpSchema.safeParse(values);

  if (!validatedFields.success) {
    return { error: "Invalid fields" };
  }

  const { name, email, password } = validatedFields.data;
  const hashedPassword = await bcrypt.hash(password, 10);

  const ifExistingUser = await doQuery(
    `
      SELECT EXISTS (SELECT 1 FROM users WHERE email=$1);
    `,
    [email]
  );

  if (ifExistingUser?.rows[0]?.exists) {
    return { error: "Email already exists" };
  }

  await doQuery(
    `
      INSERT INTO users (name, email, password)
      VALUES ($1, $2, $3);
    `,
    [name, email, hashedPassword]
  );

  return { success: "User created!" };
};
