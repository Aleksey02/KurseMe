import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ChatLinkService } from './chat-link.service';
import { CreateChatLinkDto } from './dto/create-chat-link.dto';
import { UpdateChatLinkDto } from './dto/update-chat-link.dto';

@Controller('chat-link')
export class ChatLinkController {
  constructor(private readonly chatLinkService: ChatLinkService) {}

  @Post()
  create(@Body() createChatLinkDto: CreateChatLinkDto) {
    return this.chatLinkService.create(createChatLinkDto);
  }

  @Get()
  getLink() {
    return this.chatLinkService.getLink();
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.chatLinkService.remove(+id);
  }
}
