import { Controller, Post, UseGuards, Request, Get, Body, Res, Req } from '@nestjs/common';
import { AuthService } from './auth.service';
import { LocalAuthGuard } from './guards/local-auth.guard';
import { JwtAuthGuard } from './guards/jwt-auth.guard';
import { Response, Request as ExpressRequest } from 'express';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('login')
  @UseGuards(LocalAuthGuard)
  async login(@Request() req) {
    return this.authService.login(req.user);
  }

  @Get('profile')
  @UseGuards(JwtAuthGuard)
  getProfile(@Request() req) {
    return this.authService.getProfile(req.user?.email);
  }

  @Post('loginToBot')
  async loginToBot(
    @Body('initData') initData: any,
    @Req() req: ExpressRequest,
    @Res({ passthrough: true }) res: Response
) {
    const cookie = req.headers.cookie || '';
    const token = await this.authService.loginToBot(initData, cookie);
  
    res.cookie('access_token', token, {
      httpOnly: true,
      secure: true, // включи, если HTTPS
      sameSite: 'lax',
      maxAge: 30 * 24 * 60 * 60 * 1000,
    });
    return { success: true };
  }
}
