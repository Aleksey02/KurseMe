import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class ChatLink {
	@PrimaryGeneratedColumn()
	id: number;

	@Column({nullable: true})
	link: string;
}
