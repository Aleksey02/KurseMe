import { Injectable, UnauthorizedException } from '@nestjs/common';
import { UserService } from 'src/user/user.service';
import { JwtService } from '@nestjs/jwt';
import { IUser } from 'src/types/types';
import { HttpService } from '@nestjs/axios';
import { firstValueFrom } from 'rxjs';

@Injectable()
export class AuthService {
  constructor(
    private usersService: UserService, 
    private jwtService: JwtService, 
    private readonly httpService: HttpService
  ) {}

  async login(user: IUser) {
    const { id, email, isAdmin } = user;
    const payload = { email, id };
    return {
      id,
      email,
      isAdmin,
      token: this.jwtService.sign(payload),
    };
  }

  async getProfile(uniqueKey: string){
    return this.usersService.findOneByKey(uniqueKey);
  }

async loginToBot(cookies: string) {
  try {
    const response = await firstValueFrom(
      this.httpService.get<any>('https://snosy.cc/v1/api/me/', {
        headers: {
          accept: 'application/json',
          Cookie: cookies, // передаем куки
        },
        withCredentials: true, // на бэке обычно не обязательно, но можно оставить
      }),
    );
    console.log(response.data, 'response.data org');
    if (!('tg_id' in response.data)) {
      throw new UnauthorizedException();
    }
    const user = await this.usersService.create(response.data);

    return user; // или нужный токен
  } catch (error) {
    console.error('Ошибка при запросе:', error?.response?.data || error.message);
    throw error;
  }
}
}
