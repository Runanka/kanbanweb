import NextAuth from "next-auth";
import PostgresAdapter from "@auth/pg-adapter";
import { Pool } from "pg";

// import { pool } from "./lib/db";
import authConfig from "./auth.config";

const pool = new Pool({
  host: process.env.PGHOST,
  database: process.env.PGDATABASE,
  user: process.env.PGUSER,
  password: process.env.PGPASSWORD,
  port: process.env.PGPORT ? parseInt(process.env.PGPORT) : undefined,
  ssl: true,
})

export const {
  handlers: { GET, POST },
  auth,
  signIn,
  signOut,
} = NextAuth({
  adapter: PostgresAdapter(pool),
  session: { strategy: "jwt" },
  ...authConfig,
});
