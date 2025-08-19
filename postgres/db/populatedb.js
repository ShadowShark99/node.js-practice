#! /usr/bin/env node

const { Client } = require("pg");
const {argv} = require('node:process');

const SQL = `
CREATE TABLE IF NOT EXISTS usernames (
  id INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
  username VARCHAR ( 255 )
);

INSERT INTO usernames (username) 
VALUES
  ('Bryan'),
  ('Odin'),
  ('Damon');
`;

async function main() {
  console.log("seeding...");
  let url = "postgresql://kaden@localhost:5432/top_users";
  if (argv.length > 2)
    url = argv[3];
  const client = new Client({
    connectionString: url,
  });
  await client.connect();
  await client.query(SQL);
  await client.end();
  console.log("done");
}

main();