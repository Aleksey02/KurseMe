import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ChannelLinkService } from './channel-link.service';
import { CreateChannelLinkDto } from './dto/create-channel-link.dto';

@Controller('channel-link')
export class ChannelLinkController {
  constructor(private readonly channelLinkService: ChannelLinkService) {}

  @Post()
  create(@Body() createBotLinkDto: CreateChannelLinkDto) {
    console.log(createBotLinkDto, 'createBotLinkDto');
    return this.channelLinkService.create(createBotLinkDto);
  }

  @Get()
  getLink() {
    return this.channelLinkService.getLink();
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.channelLinkService.remove(+id);
  }
}
