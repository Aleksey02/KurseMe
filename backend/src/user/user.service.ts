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
    const adminsIds =  this.configService.get<string>('ADMINS_IDS');
    console.log('createUserDto', createUserDto);
    const existUser = await this.userRepository.findOne({ where: { tgId: createUserDto.tg_id.toString() } });
    console.log('existUser', existUser);
    if(existUser) {
      const updateUser = await this.userRepository.merge(existUser, {
        username: createUserDto.username,
        isSubscribed: createUserDto.is_subscribed,
        referral_balance: createUserDto.details?.referral_balance,
        referrals_count: createUserDto.details?.referrals_count,
        isAdmin: Boolean(adminsIds?.split(' ').find(id => id === createUserDto.tg_id.toString()))
      });
      console.log(updateUser, 'updateUser');

      const savedUser = await this.userRepository.save(updateUser);
      
      return { user: savedUser };
    };

    const uniqueKey = uuid();

    const user = await this.userRepository.save({
      username: createUserDto.username,
      tgId: createUserDto.tg_id.toString(),
      key: uniqueKey,
      isSubscribed: createUserDto.is_subscribed,
      referral_balance: createUserDto.details?.referral_balance,
      referrals_count: createUserDto.details?.referrals_count,
      isAdmin: Boolean(adminsIds?.split(' ').find(id => id === createUserDto.tg_id.toString()))
    });
    console.log('user', user);
    return { user };
  }

  findAll() {
    return `This action returns all user`;
  }

  async findOne(tgId: string) {
    return await this.userRepository.findOne({ where: { tgId: tgId.toString() } });
  }

  async findOneByKey(uniqueKey: string) {
    return await this.userRepository.findOne({ where: { key: uniqueKey } });
  }
}
