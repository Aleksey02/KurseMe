import { IsString } from "class-validator";

export class CreateFolderLinkDto {
	@IsString()
	link: string
}
