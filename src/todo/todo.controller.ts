import { Body, Controller , HttpStatus, Post, Res} from "@nestjs/common";
import { Task } from "src/entities/todo.entity";
import { TodoService } from "./todo.service";

@Controller('todo')
export class TodoController {
    constructor(private readonly todoService: TodoService) { }
    
    @Post('/addTask')
    async addTask(@Res() response, @Body()task: Task) {
        const newTask = await this.todoService.addTask(task);
        return response.status(HttpStatus.CREATED).json({
            newTask
        })
    }
}