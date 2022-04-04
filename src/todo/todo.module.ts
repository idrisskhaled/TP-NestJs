import { Module } from '@nestjs/common';
import { TodoController } from './todo.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TodoEntity } from './Entity/todo.entity';
import { TodoService } from './todo.service';
import { TodoDBController } from './todoDB.controller';

@Module({
  controllers: [TodoController, TodoDBController],
  imports: [TypeOrmModule.forFeature([TodoEntity])],
  providers: [TodoService],
})
export class TodoModule {}
