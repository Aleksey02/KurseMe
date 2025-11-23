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
    // Ищем последнюю запись (максимальный id)
    const lastLink = await this.botLinkRepository.findOne({
      order: { id: 'DESC' },
    });

    // Если запись существует → обновляем её
    if (lastLink) {
      await this.botLinkRepository.update(lastLink.id, createBotLinkDto);
      return { ...lastLink, ...createBotLinkDto };
    }

    // Иначе → создаём новую
    return await this.botLinkRepository.save(createBotLinkDto);
  }

  async findAll() {
    return await this.botLinkRepository.find();
  }

  async getLink() {
    return await this.botLinkRepository.findOne({
      order: { id: 'DESC' },  // сортируем по убыванию
    });
  }

  remove(id: number) {
    return `This action removes a #${id} botLink`;
  }
}
