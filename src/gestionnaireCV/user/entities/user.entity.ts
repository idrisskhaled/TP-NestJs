import { TiemstampEntity } from "src/generics/tiemstamp.entity";
import { Cv } from "src/gestionnaireCV/cv/entities/cv.entity";
import { Skill } from "src/gestionnaireCV/skill/entities/skill.entity";
import { Column, Entity, JoinTable, ManyToMany, OneToMany, PrimaryGeneratedColumn } from "typeorm";
@Entity('user')
export class User extends TiemstampEntity{
    @PrimaryGeneratedColumn()
    id: number;
    @Column({})
    username: string;
    @Column({})
    email:string;
    @Column({})
    password:string;
    @OneToMany(
        () => Cv,
        (cv: Cv) => cv.user
        )
    cvs: Cv[];
    @ManyToMany(type => Skill)
    @JoinTable({
    name: "cv_skill", // nom de la table à générer
    joinColumn: {
    name: "cv", // nom du champ représentant l’entité actuelle
    referencedColumnName: "id"
    },
    inverseJoinColumn: {
    name: "skill", // nom du champ représentant l’entité en relation avec cet entité
    referencedColumnName: "id"
    }
    })
    skills: Skill[];
}
