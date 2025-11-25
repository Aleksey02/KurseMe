import { IsString } from "class-validator";

export class CreateChannelLinkDto {
	@IsString()
	link: string
}
