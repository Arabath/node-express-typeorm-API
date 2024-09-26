import { BaseEntity, Column, Entity, PrimaryColumn, UpdateDateColumn } from "typeorm";

@Entity()
export class Film extends BaseEntity {

    @PrimaryColumn()
    film_id: number;

    @Column()
    title: string;

    @Column()
    description: string;

    @Column()
    release_year: number;

    @Column()
    rental_duration: number;

    @Column()
    rental_rate: number;

    @Column()
    length: number;

    @Column()
    replacement_cost: number;

    @Column()
    rating: string;
    
    @UpdateDateColumn()
    last_update: Date;

    @Column()
    special_features: string;

    @Column()
    fulltext: string;    

}