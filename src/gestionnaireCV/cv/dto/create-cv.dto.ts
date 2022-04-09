import { IsNotEmpty, MaxLength, MinLength } from "class-validator"

export class CreateCvDto {
    @IsNotEmpty()
    @MinLength(3)
    @MaxLength(10)
    name:string
    @IsNotEmpty()
    @MinLength(3)
    @MaxLength(10)
    firstname:string
    Age:number
    @IsNotEmpty()
    Cin:string
    Job:string
    path:string
    @IsNotEmpty()
    userId:string
}
