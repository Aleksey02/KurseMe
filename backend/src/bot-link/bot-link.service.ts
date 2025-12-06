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
    const existing = await this.botLinkRepository.findOne({
      where: { domen: createBotLinkDto.domen },
    });

    if (existing) {
      await this.botLinkRepository.update(existing.id, createBotLinkDto);
      return { ...existing, ...createBotLinkDto };
    }

    return await this.botLinkRepository.save(createBotLinkDto);
  }

  async findAll() {
    return await this.botLinkRepository.find();
  }

  async getLink(domen: string) {
    const lastLink = await this.botLinkRepository.findOne({
        where: {domen}
      });

    return lastLink?.link;
  }

  remove(id: number) {
    return `This action removes a #${id} botLink`;
  }
}
