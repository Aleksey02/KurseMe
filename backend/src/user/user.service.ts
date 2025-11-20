import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './entities/user.entity';
import { Repository } from 'typeorm';
import { ConfigService } from '@nestjs/config';
import { v4 as uuid } from 'uuid';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User) private readonly userRepository: Repository<User>,
    private readonly configService: ConfigService
  ) {}

  async create(createUserDto: CreateUserDto) {
    this.userRepository.clear();
    const existUser = await this.userRepository.findOne({ where: { tgId: createUserDto.tg_id } });
    if(existUser) return existUser;

    const adminsIds =  this.configService.get<string>('ADMINS_IDS');
    const uniqueKey = uuid();

    const user = await this.userRepository.save({
      username: createUserDto.username,
      tgId: createUserDto.tg_id,
      key: uniqueKey,
      isSubscribed: createUserDto.is_subscribed,
      referral_balance: createUserDto.details?.referral_balance,
      referrals_count: createUserDto.details?.referrals_count,
      isAdmin: Boolean(adminsIds?.split(' ').find(id => Number(id) === createUserDto.tg_id))
    });
    return { user };
  }

  findAll() {
    return `This action returns all user`;
  }

  async findOne(tgId: number) {
    return await this.userRepository.findOne({ where: { tgId } });
  }

  async findOneByKey(uniqueKey: string) {
    return await this.userRepository.findOne({ where: { key: uniqueKey } });
  }
}
