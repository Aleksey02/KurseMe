import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class ChannelLink {
	@PrimaryGeneratedColumn()
	id: number;

	@Column({nullable: true})
	link: string;
}
