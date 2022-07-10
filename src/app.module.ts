import { Module } from '@nestjs/common';
import { TodoModule } from './todo/todo.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Task } from './entities/todo.entity';

@Module({
  imports: [
    TodoModule,
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 6603,
      username: 'root',
        password: 'password',
        database: 'todo-app',
      entities: [Task],
        synchronize: true,
        dropSchema: true
    }),
  ],
})
export class AppModule {}
