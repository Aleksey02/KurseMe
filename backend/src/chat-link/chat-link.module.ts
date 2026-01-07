import { Module } from '@nestjs/common';
import { ChatLinkService } from './chat-link.service';
import { ChatLinkController } from './chat-link.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ChatLink } from './entities/chat-link.entity';

@Module({
  imports: [TypeOrmModule.forFeature([ChatLink])],
  controllers: [ChatLinkController],
  providers: [ChatLinkService],
})
export class ChatLinkModule {}
