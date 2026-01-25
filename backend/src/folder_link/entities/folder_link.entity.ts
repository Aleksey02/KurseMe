import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class FolderLink {
	@PrimaryGeneratedColumn()
	id: number;

	@Column({nullable: true})
	link: string;
}
