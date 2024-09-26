import { BaseEntity, Column, CreateDateColumn, Entity, PrimaryColumn } from "typeorm"

@Entity()
export class Address extends BaseEntity {

    @PrimaryColumn()
    address_id: number;

    @Column()
    address: string;

    @Column()
    address2: string;
    
    @Column()
    district: string;
    
    @Column()
    city_id: number;
    
    @Column()
    postal_code: string;

    @Column()
    phone: string;

    @CreateDateColumn()
    last_update: Date;

}