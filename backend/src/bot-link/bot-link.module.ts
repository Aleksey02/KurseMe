import { Module } from '@nestjs/common';
import { BotLinkService } from './bot-link.service';
import { BotLinkController } from './bot-link.controller';

@Module({
  controllers: [BotLinkController],
  providers: [BotLinkService],
})
export class BotLinkModule {}
