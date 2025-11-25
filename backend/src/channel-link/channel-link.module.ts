import { Module } from '@nestjs/common';
import { ChannelLinkService } from './channel-link.service';
import { ChannelLinkController } from './channel-link.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ChannelLink } from './entities/channel-link.entity';

@Module({
  imports: [TypeOrmModule.forFeature([ChannelLink])],
  controllers: [ChannelLinkController],
  providers: [ChannelLinkService],
})
export class ChannelLinkModule {}
