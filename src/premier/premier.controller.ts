import {
  Body,
  Controller,
  Delete,
  Get,
  NotFoundException,
  Param,
  Patch,
  Post,
  Put,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { Observable, of } from 'rxjs';
import { UserDto } from './dto/user.dto';
import { isInstance } from 'class-validator';
import { UserUpdateDto } from './dto/user-update.dto';
import { ConfigService } from "@nestjs/config";

@Controller('premier')
export class PremierController {
  constructor(private configService: ConfigService) {
    console.log(this.configService.get('name'));
  }
  @Post('test')
  testValidateur(@Body() user: UserDto): UserDto {
    console.log(user);
    console.log(isInstance(user, UserDto));
    return user;
  }
  @Post('test2')
  testValidateur2(@Body() user: UserDto): UserDto {
    console.log(user);
    console.log(isInstance(user, UserDto));
    return user;
  }

  @Post('testu')
  testValidateurUodate(@Body() user: UserUpdateDto): UserUpdateDto {
    console.log(user);
    console.log(isInstance(user, UserDto));
    return user;
  }
  @Get('/:name/:firstname')
  getPremierWithParam(@Param('name') params): string {
    console.log(params);
    console.log('GET 🐢');
    throw new NotFoundException('');
    return 'GET 🐢';
  }

  @Get()
  getPremier(): Observable<number> {
    const observable = new Observable<number>((observer) => {
      let i = 5;
      setInterval(() => {
        if (!i) {
          observer.complete();
        }
        observer.next(i--);
      }, 1000);
    });
    observable.subscribe((val) => {
      console.log(val);
    });
    observable.subscribe(
      (val) => {
        console.log('cc j ai recu la valeur ' + val);
      },
      (erreur) => {
        console.log(erreur);
      },
      () => {
        console.log('end of process');
      },
    );
    return observable;
    // console.log('GET 🐢');
    // return 'GET 🐢';
  }

  @Post()
  postPremier(@Body() data) {
    console.log('POST 🐇');
    return data;
  }

  @Delete()
  deletePremier() {
    console.log('Delete 🚚');
    return 'Delete 🚚';
  }

  @Put()
  putPremier() {
    console.log('PUT 🚚');
    return 'PUT 🚚';
  }

  @Patch()
  patchPremier() {
    console.log('Patch 🚚');
    return 'Patch 🚚';
  }
}
