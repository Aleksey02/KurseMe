import { Module } from '@nestjs/common';
import { FolderLinkService } from './folder_link.service';
import { FolderLinkController } from './folder_link.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { FolderLink } from './entities/folder_link.entity';

@Module({
  imports: [TypeOrmModule.forFeature([FolderLink])],
  controllers: [FolderLinkController],
  providers: [FolderLinkService],
})
export class FolderLinkModule {}
