import { Injectable, UnauthorizedException } from '@nestjs/common';
import { UserService } from 'src/user/user.service';
import * as argon2 from 'argon2';
import { JwtService } from '@nestjs/jwt';
import { IUser } from 'src/types/types';

@Injectable()
export class AuthService {
  constructor(private usersService: UserService, private jwtService: JwtService) {}

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
}
