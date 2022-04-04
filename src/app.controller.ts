import { Controller, Get } from '@nestjs/common';

@Controller('test')
export class AppController {
  @Get()
  getHello(): any {
    return {
      message: 'Hello',
      to: 'GL3',
    };
  }
  @Get('test')
  testGet(): string {
    return 'TEST OK';
  }
}
