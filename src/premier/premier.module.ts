import { Module } from '@nestjs/common';
import { PremierController } from './premier.controller';

@Module({
  controllers: [PremierController],
})
export class PremierModule {}
