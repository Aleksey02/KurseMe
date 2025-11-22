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

    if (hasLink.length) {
      return this.botLinkRepository.update(0, createBotLinkDto);
    } 

    return this.botLinkRepository.save(createBotLinkDto);
  }

  findAll() {
    return this.botLinkRepository.find();
  }

  getLink() {
    return this.botLinkRepository.findOne(0);
  }

  remove(id: number) {
    return `This action removes a #${id} botLink`;
  }
}
