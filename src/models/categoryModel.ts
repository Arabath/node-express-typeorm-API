import { BaseEntity, Column, CreateDateColumn, Entity, PrimaryColumn } from "typeorm"

@Entity()
export class Category extends BaseEntity {
    @PrimaryColumn()
    category_id: number;

    @Column()
    name: string;

    @CreateDateColumn()
    last_update: Date;
}