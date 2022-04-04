import {
  IsEnum,
  IsNotEmpty,
  IsOptional,
  MaxLength,
  MinLength,
} from 'class-validator';
import { PartialType } from '@nestjs/mapped-types';
import { AddTodoDto } from './dto/add-todo.dto';
import { TodoStatusEnum } from './enums/todo-status.enum';

export class UpdateTodoDto extends PartialType(AddTodoDto) {
  @IsOptional()
  @IsEnum(TodoStatusEnum)
  status: TodoStatusEnum;
}
