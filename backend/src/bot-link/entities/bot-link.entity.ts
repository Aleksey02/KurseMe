import { IsString } from "class-validator";
import { PrimaryGeneratedColumn } from "typeorm";

export class BotLink {
	@PrimaryGeneratedColumn()
	id: number;

	@IsString()
	link: string;
}
