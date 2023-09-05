import "reflect-metadata";
import { DataSource } from "typeorm";

export const AppDataSource = new DataSource({
  type: "postgres",
  host: "localhost",
  port: 5432,
  username: "fetch_admin",
  password: "f3tch",
  database: "fetch-local",
  synchronize: true,
  logging: true,
  entities: ["src/entity/**/*.ts"],
  migrations: [],
  subscribers: [],
});
