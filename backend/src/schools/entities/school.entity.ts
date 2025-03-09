import { Subject } from 'src/subjects/entities/subject.entity';
import { PrimaryGeneratedColumn, Column, OneToMany, Entity } from 'typeorm';

@Entity()
export class School {
	@PrimaryGeneratedColumn()
	id: number

	@Column()
	name: string

	@Column()
	description: string

	@Column()
	imageUrl: string

	@Column()
	grade: number

	@OneToMany(()=> Subject, subject => subject.school, {onDelete: 'CASCADE'})
	subjects: Subject[]


}
