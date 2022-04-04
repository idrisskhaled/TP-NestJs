import { CreateDateColumn, DeleteDateColumn, VersionColumn } from 'typeorm';

export class TiemstampEntity {
  @CreateDateColumn({
    update: false,
  })
  createdAt: Date;
  @CreateDateColumn({})
  updatedAt: Date;
  @DeleteDateColumn({})
  deletedAt: Date;
  @VersionColumn()
  version: number;
}
