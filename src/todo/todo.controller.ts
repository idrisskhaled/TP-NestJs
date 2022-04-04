import { Body, Controller, Get, Post, Req } from '@nestjs/common';
import { Todo } from './Model/todo.model';
import { Request } from 'express';
import { v4 as uuidv4 } from 'uuid';
import { TodoService } from './todo.service';
import { TodoEntity } from './Entity/todo.entity';
@Controller({
  path: 'todo',
  version: '1',
})
export class TodoController {
  constructor(private todoService: TodoService) {
    this.todos = [new Todo('1', 'Sport', 'Faire du sport')];
  }
  todos: Todo[] = [];
  @Get()
  getTodos(@Req() request: Request): Todo[] {
    // console.log(request);
    return this.todos;
  }
  @Post('fake')
  addTodo(@Body() newTodoData: Todo): Todo {
    let todo = new Todo();
    // const { name, description} = newTodoData;
    todo.id = uuidv4();
    todo = { ...todo, ...newTodoData };
    this.todos.push(todo);
    return todo;
  }
  @Get('version')
  version() {
    return '1';
  }
}
