import { DataSource } from "typeorm";
import { Actor } from "../models/actorModel";

export const AppDataSource = new DataSource({
    type: 'postgres',
    host: 'localhost',
    port: 5432, 
    username: 'postgres',
    password: 'admin',
    database: 'dvdrental',
    entities: [Actor],
    synchronize: false
})

