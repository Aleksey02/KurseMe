import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@Entity()
export class User {
	@PrimaryGeneratedColumn()
	id: number

	@Column({nullable: true})
	tgId: number

	@Column()
	key: string

	@Column()
	name: string

	@CreateDateColumn()
	createdAt: Date

	@UpdateDateColumn()
	updatedAt: Date

	@Column({ default: false })
	isAdmin: boolean
}
