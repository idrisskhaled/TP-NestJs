import { Injectable, NotFoundException } from '@nestjs/common';
import { Like, Repository, SelectQueryBuilder } from 'typeorm';
import { TodoEntity } from './Entity/todo.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { UpdateTodoDto } from './update-todo.dto';
import { DeleteResult } from 'typeorm/query-builder/result/DeleteResult';
import { UpdateResult } from 'typeorm/query-builder/result/UpdateResult';
import { SearchTodoDto } from './dto/search-todo.dto';
import { TodoStatusEnum } from './enums/todo-status.enum';

@Injectable()
export class TodoService {
  constructor(
    @InjectRepository(TodoEntity)
    private todoRepository: Repository<TodoEntity>,
  ) {}
  addTodo(todo: Partial<TodoEntity>): Promise<TodoEntity> {
    return this.todoRepository.save(todo);
  }

  async updateTodo(
    updateTodoDto: UpdateTodoDto,
    id: string,
  ): Promise<TodoEntity> {
    const newTodo = await this.todoRepository.preload({ id, ...updateTodoDto });
    if (newTodo) {
      return this.todoRepository.save(newTodo);
    } else {
      throw new NotFoundException(`Le todo d'id ${id} n'existe pas `);
    }
  }

  async deleteTodo(id: string): Promise<DeleteResult> {
    const result = await this.todoRepository.delete(id);
    if (result.affected) {
      return result;
    }
    throw new NotFoundException(`Le todo d'id ${id} n'existe pas `);
  }
  async softDeleteTodo(id: string): Promise<UpdateResult> {
    const result = await this.todoRepository.softDelete(id);
    if (result.affected) {
      return result;
    }
    throw new NotFoundException(`Le todo d'id ${id} n'existe pas `);
  }

  async softRestoreTodo(id: string) {
    const result = await this.todoRepository.restore(id);
    if (result.affected) {
      return result;
    }
    throw new NotFoundException(`Le todo d'id ${id} n'existe pas `);
  }
  async findPerPage(nb: number, page: number): Promise<TodoEntity[]> {
    const result = await this.todoRepository
      .createQueryBuilder('todos')
      .select('*')
      .take(nb)
      .skip((page - 1) * nb)
      .getMany();
    return result;
  }
  findAll(searchTodoDto: SearchTodoDto): Promise<TodoEntity[]> {
    const criterias = [];
    if (searchTodoDto.criteria && searchTodoDto.status) {
      criterias.push({
        name: Like(`%${searchTodoDto.criteria}%`),
        status: searchTodoDto.status,
      });
      criterias.push({
        description: Like(`%${searchTodoDto.criteria}%`),
        status: searchTodoDto.status,
      });
    }
    if (criterias.length) {
      return this.todoRepository.find({ withDeleted: true, where: criterias });
    }
    return this.todoRepository.find({ withDeleted: true });
  }

  findByStatus(status: TodoStatusEnum) {
    return this.todoRepository
      .createQueryBuilder('todo')
      .select('*')
      .where({ status: status })
      .getCount();
  }

  async findByCreationDate(date1: Date, date2: Date): Promise<TodoEntity[]> {
    return await this.todoRepository
      .createQueryBuilder('todo')
      .select('*')
      .where(
        'todo.createdAt >= :date1',

        { date1: date1 },
      )
      .andWhere(
        'todo.createdAt <= :date2',

        { date2: date2 },
      )
      .getRawMany();
  }
}
