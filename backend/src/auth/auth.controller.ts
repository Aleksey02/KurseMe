import { Controller, Post, UseGuards, Request, Get, Headers } from '@nestjs/common';
import { AuthService } from './auth.service';
import { LocalAuthGuard } from './guards/local-auth.guard';
import { JwtService } from '@nestjs/jwt';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService, private jwtService: JwtService) {}

  @Post('login')
  @UseGuards(LocalAuthGuard)
  async login(@Request() req) {
    return this.authService.login(req.user);
  }

  @Get('profile')
  getProfile(@Request() req) {
    console.log('req', req.user);
    return this.authService.getProfile(req.user?.key);
  }

  @Get('loginToBot')
  async loginToBot(
    @Headers('cookie') cookie: string
) {
  const data = await this.authService.loginToBot(cookie);
    return data;
  }
}
