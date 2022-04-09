import { TiemstampEntity } from "src/generics/tiemstamp.entity"
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm"
@Entity('skill')
export class Skill extends TiemstampEntity{
    @PrimaryGeneratedColumn()
    id:number
    @Column({})
    Desigantion:string
}
