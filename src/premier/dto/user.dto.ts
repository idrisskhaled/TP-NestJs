import { TodoStatusEnum } from '../../todo/enums/todo-status.enum';
import {
  IsEnum,
  IsNotEmpty,
  IsNumber,
  MaxLength,
  MinLength,
} from 'class-validator';
import { Type } from "class-transformer";

export class UserDto {
  @IsNotEmpty()
  @Type((ConvertTo) => Number)
  @IsNumber()
  age: number;
  @IsNotEmpty()
  @MinLength(3)
  @MaxLength(10)
  name: string;
  @IsNotEmpty()
  @IsEnum(TodoStatusEnum)
  status: TodoStatusEnum;
}
