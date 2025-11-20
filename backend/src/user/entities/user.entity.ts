import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@Entity()
export class User {
	@PrimaryGeneratedColumn()
	id: number

	@Column({nullable: true})
	tgId: number

	@Column({nullable: true})
	key: string

	@Column({nullable: true})
	username: string
	
	@CreateDateColumn()
	createdAt: Date
	
	@UpdateDateColumn()
	updatedAt: Date
	
	@Column({ default: false })
	isAdmin: boolean
	
	@Column({nullable: true})
	isSubscribed: string
	
	@Column({nullable: true})
	referral_balance: number

	@Column({nullable: true})
	referrals_count: number
}
