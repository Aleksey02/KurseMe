import { IsString } from "class-validator";

export class BotLink {
	@IsString()
	link: string;
}
