import type { NextAuthConfig } from "next-auth";

import Credentials from "next-auth/providers/credentials";
import bcrypt from "bcryptjs";

import { LoginSchema } from "./schemas";
import { doQuery } from "./lib/db";

export default {
  providers: [
    Credentials({
      async authorize(credentials) {
        const validatedFields = LoginSchema.safeParse(credentials);

        if (validatedFields.success) {
          const { email, password } = validatedFields.data;

          const user = await doQuery(
            `
              SELECT EXISTS (SELECT 1 FROM users WHERE email=$1);
            `,
            [email]
          );

          if (!user?.rows[0]?.exists || !user?.rows[0].password) {
            return null;
          }

          const match = await bcrypt.compare(password, user?.rows[0].password);

          if (match) {
            return user?.rows[0];
          }
        }

        return null;
      },
    }),
  ],
} satisfies NextAuthConfig;
