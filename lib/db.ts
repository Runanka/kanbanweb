import { Pool } from "pg";

const pool = new Pool({
  host: process.env.PGHOST,
  database: process.env.PGDATABASE,
  user: process.env.PGUSER,
  password: process.env.PGPASSWORD,
  port: process.env.PGPORT ? parseInt(process.env.PGPORT) : undefined,
  ssl: true,
});

export async function doQuery(text: string, params?: any[]) {
  let client;
  try {
    client = await pool.connect();
    const res = await client.query(text, params);
    return res;
  } catch (err) {
    console.error("Error executing query: ", err);
  } finally {
    client?.release();
  }
}
