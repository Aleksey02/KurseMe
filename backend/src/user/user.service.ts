import { JwtService } from '@nestjs/jwt';
import { BadRequestException, Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './entities/user.entity';
import { Repository } from 'typeorm';
import * as argon2 from 'argon2';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User) private readonly userRepository: Repository<User>,
    private readonly JwtService: JwtService
  ) {}

  async create(createUserDto: CreateUserDto) {
    const existUser = await this.userRepository.findOne({ where: { email: createUserDto.email } });
    if(existUser) throw new BadRequestException('Email already exist');
    const userCount = await this.userRepository.count();
    const user = await this.userRepository.save({
      email: createUserDto.email,
      password: await argon2.hash(createUserDto.password),
      isAdmin: userCount === 0
    });

    const token = this.JwtService.sign({ email: createUserDto.email })
    return { user, token };
  }

  findAll() {
    return `This action returns all user`;
  }

  async findOne(email: string) {
    return await this.userRepository.findOne({ where: { email } });
  }
}
