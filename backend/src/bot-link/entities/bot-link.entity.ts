import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity()
export class BotLink {
	@PrimaryGeneratedColumn()
	id: number;

	@Column({nullable: true})
	link: string;

	@Column({nullable: true})
	domen: string;
}
