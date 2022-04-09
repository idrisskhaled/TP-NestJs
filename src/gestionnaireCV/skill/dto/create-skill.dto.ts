import { IsNotEmpty, MinLength } from "class-validator";

export class CreateSkillDto {
    @IsNotEmpty()
    @MinLength(3)
    Desigantion:string
}
