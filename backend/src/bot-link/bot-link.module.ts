import { Module } from '@nestjs/common';
import { BotLinkService } from './bot-link.service';
import { BotLinkController } from './bot-link.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BotLink } from './entities/bot-link.entity';

@Module({
  imports: [TypeOrmModule.forFeature([BotLink])],
  controllers: [BotLinkController],
  providers: [BotLinkService],
})
export class BotLinkModule {}
