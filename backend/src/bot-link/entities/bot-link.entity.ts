import { IsString } from "class-validator";
import { Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class BotLink {
	@PrimaryGeneratedColumn()
	id: number;

	@IsString()
	link: string;
}
