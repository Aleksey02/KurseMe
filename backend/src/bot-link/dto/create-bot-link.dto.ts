import { IsString } from "class-validator";

export class CreateBotLinkDto {
	@IsString()
	link: string
}
