import { PartialType } from '@nestjs/mapped-types';
import { CreateFolderLinkDto } from './create-folder_link.dto';

export class UpdateFolderLinkDto extends PartialType(CreateFolderLinkDto) {}
