import { Injectable } from '@nestjs/common';
import { CreateChannelLinkDto } from './dto/create-channel-link.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { ChannelLink } from './entities/channel-link.entity';
import { Repository } from 'typeorm';

@Injectable()
export class ChannelLinkService {
  constructor(
    @InjectRepository(ChannelLink)
    private readonly channelLinkRepository: Repository<ChannelLink>
  ) {}
  
  async create(createBotLinkDto: CreateChannelLinkDto) {
    const lastLink = await this.channelLinkRepository.find({
      order: { id: 'DESC' },
      take: 1,
    });
    
    const link = lastLink[0];
  
      if (link) {
        await this.channelLinkRepository.update(link.id, createBotLinkDto);
        return { ...link, ...createBotLinkDto };
      }
  
      return await this.channelLinkRepository.save(createBotLinkDto);
    }
  
    async findAll() {
      return await this.channelLinkRepository.find();
    }
  
    async getLink() {
      const lastLink = await this.channelLinkRepository.find({
          order: { id: 'DESC' },
          take: 1,
        });
  
      return lastLink[0].link;
    }
  
    remove(id: number) {
      return `This action removes a #${id} botLink`;
    }
}
