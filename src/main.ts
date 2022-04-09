import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe, VersioningType } from '@nestjs/common';
import * as dotenv from 'dotenv';
import { TodoService } from './todo/todo.service';
import { UserService } from './gestionnaireCV/user/user.service';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const todoService=app.get(UserService);
  console.log(todoService.findAll());
  app.enableVersioning({
    type: VersioningType.URI,
  });
  
  dotenv.config();
  app.useGlobalPipes(
    new ValidationPipe({
      transform: true,
      whitelist: true,
      forbidNonWhitelisted: true,
    }),
  );
  // app.enableCors({ origin: ['http://localhost:4200'] });
  await app.listen(3000);
}
bootstrap();
