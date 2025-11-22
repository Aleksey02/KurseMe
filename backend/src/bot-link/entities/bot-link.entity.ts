import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity()
export class BotLink {
	@PrimaryGeneratedColumn()
	id: number;

	@Column()
	link: string;
}
