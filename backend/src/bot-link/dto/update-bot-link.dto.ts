import { PartialType } from '@nestjs/mapped-types';
import { CreateBotLinkDto } from './create-bot-link.dto';

export class UpdateBotLinkDto extends PartialType(CreateBotLinkDto) {}
