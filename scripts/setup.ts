const postgres = require("postgres");

let { PGHOST, PGDATABASE, PGUSER, PGPASSWORD, PGPORT } = process.env;

const sql = postgres({
  host: PGHOST,
  database: PGDATABASE,
  username: PGUSER,
  password: PGPASSWORD,
  port: PGPORT,
  ssl: "require",
});

async function clear() {
  try {
    await sql`DROP TABLE IF EXISTS accounts;`;
    await sql`DROP TABLE IF EXISTS users;`;
    await sql`DROP TABLE IF EXISTS sessions;`;

    console.log(`Cleared tables`);
  } catch (err) {
    console.error(
      "An error occurred while attempting to clear the tables: ",
      err
    );
    throw err;
  }
}

async function setup() {
  try {
    await sql`
      CREATE TABLE accounts (
        id SERIAL,
        "userId" INTEGER NOT NULL,
        type VARCHAR(255) NOT NULL,
        provider VARCHAR(255) NOT NULL,
        "providerAccountId" VARCHAR(255) NOT NULL,
        refresh_token TEXT,
        access_token TEXT,
        expires_at BIGINT,
        id_token TEXT,
        scope TEXT,
        session_state TEXT,
        token_type TEXT,

        PRIMARY KEY (id));`;

    await sql`
      CREATE TABLE users (
        id SERIAL,
        name VARCHAR(255),
        email VARCHAR(255) UNIQUE,
        password VARCHAR(255),
        "emailVerified" TIMESTAMPTZ,
        image TEXT,

        PRIMARY KEY (id));`;

    console.log(`Successfully created tables`);
  } catch (err) {
    console.error(
      "An error occurred while attempting to setup the tables: ",
      err
    );
    throw err;
  }
}

async function main() {
  try {
    await clear();
    await setup();
  } catch (err) {
    console.error("An error occurred", err);
  }
}

main().catch((err) => {
  console.error(
    "An error occurred while attempting to setup the database: ",
    err
  );
});
