import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { FolderLinkService } from './folder_link.service';
import { CreateFolderLinkDto } from './dto/create-folder_link.dto';

@Controller('folder-link')
export class FolderLinkController {
  constructor(private readonly folderLinkService: FolderLinkService) {}

  @Post()
  create(@Body() createFolderLinkDto: CreateFolderLinkDto) {
    return this.folderLinkService.create(createFolderLinkDto);
  }

  @Get()
  getLink() {
    return this.folderLinkService.getLink();
  }
}
