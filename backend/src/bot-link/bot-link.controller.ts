import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { BotLinkService } from './bot-link.service';
import { CreateBotLinkDto } from './dto/create-bot-link.dto';

@Controller('bot-link')
export class BotLinkController {
  constructor(private readonly botLinkService: BotLinkService) {}

  @Post()
  create(@Body() createBotLinkDto: CreateBotLinkDto) {
    return this.botLinkService.create(createBotLinkDto);
  }

  @Get(':domen')
  getLink(@Param('domen') domen: string) {
    return this.botLinkService.getLink(domen);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.botLinkService.remove(+id);
  }
}
