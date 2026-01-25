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
    let lastLink = await this.folderLinkRepository.findOne({
      order: { id: 'DESC' },
    });
    
  
  if (!lastLink) {
      lastLink = this.folderLinkRepository.create(createFolderLinkDto);
    } else {
      lastLink.link = createFolderLinkDto.link;
    }

      return await this.folderLinkRepository.save(lastLink);
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
