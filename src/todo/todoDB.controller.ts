import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Query,
  Req,
} from '@nestjs/common';
import { Todo } from './Model/todo.model';
import { Request } from 'express';
import { v4 as uuidv4 } from 'uuid';
import { TodoService } from './todo.service';
import { TodoEntity } from './Entity/todo.entity';
import { UpdateTodoDto } from './update-todo.dto';
import { UpdateResult } from 'typeorm/query-builder/result/UpdateResult';
import { DeleteResult } from 'typeorm/query-builder/result/DeleteResult';
import { SearchTodoDto } from './dto/search-todo.dto';
import { TodoStatusEnum } from "./enums/todo-status.enum";
import { SelectQueryBuilder } from 'typeorm';
@Controller({
  path: 'todo',
  version: '2',
})
export class TodoDBController {
  constructor(private todoService: TodoService) {}
  @Get()
  getTodos(@Query() searchTodoDto: SearchTodoDto): Promise<TodoEntity[]> {
    return this.todoService.findAll(searchTodoDto);
  }
  @Get('pagination/:nb/:page')
  getTodosPerPage(
    @Param('nb') nb: number,
    @Param('page') page: number,
  ): Promise<TodoEntity[]> {
    return this.todoService.findPerPage(nb, page);
  }
  //@Get('stats/:status')
  //getnbTodosByStatus(@Param('status') status: TodoStatusEnum):Promise<number>{
   // return this.todoService.findByStatus(status);
  //}
  @Get('stats/:date1/:date2')
  getStats(
    @Param('date1') date1: Date,
    @Param('date2') date2: Date,
  ): Promise<TodoEntity[]> {
    return this.todoService.findByCreationDate(date1, date2);
  }
  @Post()
  addTodo(@Body() newTodoData: Partial<TodoEntity>): Promise<TodoEntity> {
    return this.todoService.addTodo(newTodoData);
  }
  @Patch(':id')
  updateTodo(
    @Body() updateTodoDto: UpdateTodoDto,
    @Param('id') id: string,
  ): Promise<TodoEntity> {
    return this.todoService.updateTodo(updateTodoDto, id);
  }
  @Delete(':id')
  deleteTodo(@Param('id') id: string): Promise<DeleteResult> {
    return this.todoService.deleteTodo(id);
  }
  @Delete('/soft/:id')
  softDeleteTodo(@Param('id') id: string): Promise<UpdateResult> {
    return this.todoService.softDeleteTodo(id);
  }
  @Patch('/soft/:id')
  softRestoreTodo(@Param('id') id: string): Promise<UpdateResult> {
    return this.todoService.softRestoreTodo(id);
  }
  @Get('version')
  version() {
    return '2';
  }
}
