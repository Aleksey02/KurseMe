import { Injectable } from '@nestjs/common';
import { CreateChatLinkDto } from './dto/create-chat-link.dto';
import { UpdateChatLinkDto } from './dto/update-chat-link.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { ChatLink } from './entities/chat-link.entity';
import { Repository } from 'typeorm';

@Injectable()
export class ChatLinkService {
  constructor(
    @InjectRepository(ChatLink)
    private readonly chatLinkRepository: Repository<ChatLink>
  ) {}

  async create(createChatLinkDto: CreateChatLinkDto) {
    const lastLink = await this.chatLinkRepository.find({
      order: { id: 'DESC' },
      take: 1,
    });
    
    const link = lastLink[0];
  
      if (link) {
        await this.chatLinkRepository.update(link.id, createChatLinkDto);
        return { ...link, ...createChatLinkDto };
      }
  
      return await this.chatLinkRepository.save(createChatLinkDto);
    }
  
    async findAll() {
      return await this.chatLinkRepository.find();
    }
  
    async getLink() {
      const lastLink = await this.chatLinkRepository.find({
          order: { id: 'DESC' },
          take: 1,
        });

      if (!lastLink.length) {
        return null;
      }
  
      return lastLink[0].link;
    }
}
