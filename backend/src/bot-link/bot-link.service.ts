import { Injectable } from '@nestjs/common';
import { CreateBotLinkDto } from './dto/create-bot-link.dto';
import { UpdateBotLinkDto } from './dto/update-bot-link.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { BotLink } from './entities/bot-link.entity';
import { Repository } from 'typeorm';

@Injectable()
export class BotLinkService {
    constructor(
      @InjectRepository(BotLink)
      private readonly botLinkRepository: Repository<BotLink>
    ) {}

  async create(createBotLinkDto: CreateBotLinkDto) {
    const hasLink = await this.findAll();
    console.log(hasLink, 'hasLink');
    
    if (hasLink.length) {
      const check = await this.botLinkRepository.update(0, createBotLinkDto);
      console.log(check, 'CHECK')
      return check;
    } 

    return await this.botLinkRepository.save(createBotLinkDto);
  }

  async findAll() {
    return await this.botLinkRepository.find();
  }

  async getLink() {
    return await this.botLinkRepository.findOne({ where: { id: 0 } });
  }

  remove(id: number) {
    return `This action removes a #${id} botLink`;
  }
}
