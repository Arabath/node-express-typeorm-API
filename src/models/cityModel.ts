import { BaseEntity, Column, CreateDateColumn, Entity, PrimaryColumn } from "typeorm";

@Entity()
export class City extends BaseEntity {

    @PrimaryColumn()
    city_id: number;

    @Column()
    city: string;

    @Column()
    country_id: number;

    @CreateDateColumn()
    last_update: Date;
    
}