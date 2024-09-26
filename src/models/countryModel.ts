import { BaseEntity, Column, CreateDateColumn, Entity, PrimaryColumn } from "typeorm";

@Entity()
export class Country extends BaseEntity {

    @PrimaryColumn()
    country_id: number;

    @Column()
    country: string;

    @CreateDateColumn()
    last_update: Date;
    
}