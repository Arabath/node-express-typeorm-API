import { DataSource } from "typeorm";
import { Actor } from "../models/actorModel";
import { Address } from "../models/addressModel";
import { Category } from "../models/categoryModel";
import { City } from "../models/cityModel";
import { Country } from "../models/countryModel";
import { Customer } from "../models/customerModel";
import { Film } from "../models/filmModel";

export const AppDataSource = new DataSource({
    type: 'postgres',
    host: 'localhost',
    port: 5432, 
    username: 'postgres',
    password: 'admin',
    database: 'dvdrental',
    entities: [Actor, Address, Category, City, Country, Customer, Film],
    synchronize: false
})

