import { PartialType } from '@nestjs/mapped-types';
import { CreateChatLinkDto } from './create-chat-link.dto';

export class UpdateChatLinkDto extends PartialType(CreateChatLinkDto) {}
