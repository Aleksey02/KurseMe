import { Injectable, UnauthorizedException } from '@nestjs/common';
import { UserService } from 'src/user/user.service';
import * as argon2 from 'argon2';
import { JwtService } from '@nestjs/jwt';
import { IUser } from 'src/types/types';
import { HttpService } from '@nestjs/axios';
import { firstValueFrom } from 'rxjs';
import * as crypto from 'crypto';

@Injectable()
export class AuthService {
  configService: any;
  constructor(private usersService: UserService, private jwtService: JwtService, private readonly httpService: HttpService) {}

  async validateUser(email: string, password: string): Promise<any> {
    const user = await this.usersService.findOne(email);
    if(user){
      const passwordIsMatch = await argon2.verify(user.password, password);
      if(passwordIsMatch){
        const { password, ...result } = user;
        return result;
      }
      throw new UnauthorizedException('Password is incorrect');
    }
    throw new UnauthorizedException('User not found');
  }

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

  async getProfile(email: string){
    return this.usersService.findOne(email);
  }

  async loginToBot(initData: any, cookie?: string) {
    const isValid = this.verifyTelegramData(initData);
    if (!isValid) {
      throw new UnauthorizedException('Неверные данные Telegram');
    }
    const token = this.jwtService.sign({
      id: initData.id,
      username: initData.username,
    });

    try {
      const response = await firstValueFrom(
        this.httpService.get<any>('https://egeball.lol/v1/api/me/', {
          headers: {
            accept: 'application/json',
            Cookie: cookie || '', // передай сюда куки сессии, если есть
          },
        }),
      );

      return token;
    } catch (error) {
      console.error('Ошибка при запросе:', error?.response?.data || error.message);
      throw error;
    }
  }
  verifyTelegramData(data: Record<string, any>): boolean {
    const { hash, ...authData } = data;

    const dataCheckString = Object.keys(authData)
      .sort()
      .map((key) => `${key}=${authData[key]}`)
      .join('\n');

      const secret = crypto.createHash('sha256')
        .update(this.configService.get('TELEGRAM_BOT_TOKEN'))
        .digest();

      const hmac = crypto.createHmac('sha256', secret)
        .update(dataCheckString)
        .digest('hex');

      return hmac === hash;
    }
}
