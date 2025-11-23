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
    const lastLink = await this.botLinkRepository.find({
      order: { id: 'DESC' },
      take: 1,
    });

    const link = lastLink[0];

    if (link) {
      await this.botLinkRepository.update(link.id, createBotLinkDto);
      return { ...link, ...createBotLinkDto };
    }

    return await this.botLinkRepository.save(createBotLinkDto);
  }

  async findAll() {
    return await this.botLinkRepository.find();
  }

  async getLink() {
    const lastLink = await this.botLinkRepository.find({
        order: { id: 'DESC' },
        take: 1,
      });

    return lastLink[0].link;
  }

  remove(id: number) {
    return `This action removes a #${id} botLink`;
  }
}
