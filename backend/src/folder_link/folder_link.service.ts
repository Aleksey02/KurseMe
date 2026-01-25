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

  const [lastLink] = await this.folderLinkRepository.find({
    order: { id: 'DESC' },
    take: 1,
  });

  let linkToSave;

  if (!lastLink) {
    // создаём новую запись
    linkToSave = this.folderLinkRepository.create(createFolderLinkDto);
  } else {
    // безопасно подгружаем существующую запись с новыми данными
    linkToSave = await this.folderLinkRepository.preload({
      id: lastLink.id,
      ...createFolderLinkDto,
    });
  }

  const saved = await this.folderLinkRepository.save(linkToSave);
  console.log('saved entity', saved);

  return saved;
}
  
  
  async getLinkFolder() {
    console.log('getLinkFolder service');

    const [lastLink] = await this.folderLinkRepository.find({
      order: { id: 'DESC' },
      take: 1,
    });

    console.log(lastLink, 'lastLink');

    return lastLink?.link ?? null;
  }

}
