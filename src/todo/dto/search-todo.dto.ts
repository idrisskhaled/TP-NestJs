import { TodoStatusEnum } from '../enums/todo-status.enum';
import { IsEnum, IsOptional } from 'class-validator';

export class SearchTodoDto {
  @IsOptional()
  criteria: string;
  @IsOptional()
  @IsEnum(TodoStatusEnum)
  status: TodoStatusEnum;
}
