import { TodoStatusEnum } from '../enums/todo-status.enum';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { TiemstampEntity } from '../../generics/tiemstamp.entity';

@Entity('todo')
export class TodoEntity extends TiemstampEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;
  @Column({})
  name: string;
  @Column({})
  description: string;

  @Column({
    type: 'enum',
    enum: TodoStatusEnum,
    default: TodoStatusEnum.waiting,
  })
  status: TodoStatusEnum = TodoStatusEnum.waiting;
}
