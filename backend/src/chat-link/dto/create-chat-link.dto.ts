import { IsString } from "class-validator";

export class CreateChatLinkDto {
	@IsString()
	link: string
}
