import { BaseEntity, Column, CreateDateColumn, Entity, PrimaryColumn,  } from "typeorm"

@Entity()
export class Actor extends BaseEntity {

    @PrimaryColumn()
    actor_id: number;

    @Column()
    first_name: string;

    @Column()
    last_name: String;

    @CreateDateColumn()
    last_update: Date;

}