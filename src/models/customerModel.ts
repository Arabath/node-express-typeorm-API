import { BaseEntity, Column, CreateDateColumn, Entity, PrimaryColumn, UpdateDateColumn } from "typeorm";

@Entity()
export class Customer extends BaseEntity {

    @PrimaryColumn()
    customer_id: number;

    @Column()
    store_id: number;

    @Column()
    first_name: string;

    @Column()
    last_name: string;

    @Column()
    email: string;

    @Column()
    address_id: number;

    @Column()
    activebool: boolean;

    @CreateDateColumn()
    create_date: Date;
    
    @UpdateDateColumn()
    last_update: Date;

    @Column()
    active: number;
    
}