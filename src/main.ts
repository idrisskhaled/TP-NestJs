import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe, VersioningType } from '@nestjs/common';
import * as dotenv from 'dotenv';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableVersioning({
    type: VersioningType.URI,
  });
  dotenv.config();
  console.log('from env variables :', process.env.USER_NAME);
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
