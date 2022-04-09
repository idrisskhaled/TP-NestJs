import { TodoStatusEnum } from '../enums/todo-status.enum';
import { IsEnum, IsOptional } from 'class-validator';

export class StatDTO {
  @IsOptional()
  nb: number;
  @IsOptional()
  @IsEnum(TodoStatusEnum)
  status: TodoStatusEnum;
}