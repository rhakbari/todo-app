import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Task {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({type:"varchar", default: null})
    taskTitle: string;

    @Column({type:"varchar", default: null})
    description: string;

}