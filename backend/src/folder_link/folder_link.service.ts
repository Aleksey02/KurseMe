import { Injectable } from '@nestjs/common';
import { CreateFolderLinkDto } from './dto/create-folder_link.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { FolderLink } from './entities/folder_link.entity';
import { Repository } from 'typeorm';

@Injectable()
export class FolderLinkService {
    constructor(
      @InjectRepository(FolderLink)
      private readonly folderLinkRepository: Repository<FolderLink>
    ) {}

  async create(createFolderLinkDto: CreateFolderLinkDto) {
    const lastLink = await this.folderLinkRepository.find({
      order: { id: 'DESC' },
      take: 1,
    });
    
    const link = lastLink[0];
  console.log(link, 'service');
  
      if (link) {
        await this.folderLinkRepository.update(link.id, createFolderLinkDto);
        return { ...link, ...createFolderLinkDto };
      }

      return await this.folderLinkRepository.save(createFolderLinkDto);
    }
  
    async findAll() {
      return await this.folderLinkRepository.find();
    }
  
    async getLink() {
      console.log('getLink service');
      
      const lastLink = await this.folderLinkRepository.find({
          order: { id: 'DESC' },
          take: 1,
        });
console.log(lastLink, 'lastlink');

      if (!lastLink.length) {
        return null;
      }
  
      return lastLink[0].link;
    }
}
