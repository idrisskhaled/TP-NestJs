import { TiemstampEntity } from "src/generics/tiemstamp.entity"
import { User } from "src/gestionnaireCV/user/entities/user.entity"
import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm"
@Entity('cv')
export class Cv extends TiemstampEntity{
    @PrimaryGeneratedColumn()
    id:number
    @Column({})
    name:string
    @Column({})
    firstname:string
    @Column({})
    Age:number
    @Column({})
    Cin:string
    @Column({})
    Job:string
    @Column({})
    path:string
    @ManyToOne(
        () => User,
        (user: User) => user.cvs,
        {eager: true}
        )
    @JoinColumn()
    user: User
}
