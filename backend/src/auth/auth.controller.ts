import { Controller, Post, UseGuards, Request, Get, Body, Res } from '@nestjs/common';
import { AuthService } from './auth.service';
import { LocalAuthGuard } from './guards/local-auth.guard';
import { JwtAuthGuard } from './guards/jwt-auth.guard';
import { Response } from 'express';

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
  async loginToBot(@Body('initData') initData: any, @Res({ passthrough: true }) res: Response) {
    const token = await this.authService.loginToBot(initData);
  
    res.cookie('access_token', token, {
      httpOnly: true,
      secure: true, // включи, если HTTPS
      sameSite: 'lax',
      maxAge: 30 * 24 * 60 * 60 * 1000,
    });
    return { success: true };
  }
}
