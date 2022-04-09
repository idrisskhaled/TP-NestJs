import { IsNotEmpty, MaxLength, MinLength } from 'class-validator';

export class CreateUserDto {
    @IsNotEmpty()
    @MinLength(3)
    @MaxLength(10)
    username: string;
    @MinLength(3)
    email:string;
    @IsNotEmpty()
    @MinLength(3)
    @MaxLength(10)
    password:string;
}
