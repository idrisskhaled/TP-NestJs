import { TodoStatusEnum } from '../../todo/enums/todo-status.enum';
import { IsEnum, IsNotEmpty, MaxLength, MinLength } from 'class-validator';
import { PartialType } from '@nestjs/mapped-types';
import { UserDto } from './user.dto';

export class UserUpdateDto extends PartialType(UserDto) {}
