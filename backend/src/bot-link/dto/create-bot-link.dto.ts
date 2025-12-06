import { IsOptional, IsString } from "class-validator";

export class CreateBotLinkDto {
	@IsString()
	link: string

	@IsString()
	domen: string
}
