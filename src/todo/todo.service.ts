import { Injectable } from '@nestjs/common';
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { v4 as uuid } from 'uuid';
import { Task } from 'src/entities/todo.entity';

@Injectable()
export class TodoService {
    constructor(
        @InjectRepository(Task)
        private taskList: Repository<Task>
    ){}

    findAll(): Promise<Task[]> {
        return this.taskList.find();
    }

    // findOne(id: string): Promise<Task> {
    //     return this.taskList.findOne(id);
    // }

    addTask(task: Task): Promise<Task> {
        return this.taskList.save(task);
    }
}