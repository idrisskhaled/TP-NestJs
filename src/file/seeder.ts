import { NestFactory } from "@nestjs/core";
import { AppModule } from "../app.module";
import { UserService } from "../gestionnaireCV/user/user.service";
async function bootstrap() {
    const app = await NestFactory.createApplicationContext(AppModule);
    const todoService=app.get(UserService);
    console.log(todoService.findAll());
    // app.enableCors({ origin: ['http://localhost:4200'] });
    await app.close();
  }
  bootstrap();
  