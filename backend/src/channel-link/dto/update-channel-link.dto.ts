import { PartialType } from '@nestjs/mapped-types';
import { CreateChannelLinkDto } from './create-channel-link.dto';

export class UpdateChannelLinkDto extends PartialType(CreateChannelLinkDto) {}
