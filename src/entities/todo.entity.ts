import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Task {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ default: null})
    taskTitle: string;

    @Column()
    description: string;

}