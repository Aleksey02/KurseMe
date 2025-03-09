import { School } from 'src/schools/entities/school.entity';
import { PrimaryGeneratedColumn, Column, ManyToOne, Entity } from 'typeorm';

@Entity()
export class Subject {
	@PrimaryGeneratedColumn()
	id: number

	@Column()
	name: string

	@Column()
	imageUrl: string

	@Column()
	cost: number

	@ManyToOne(()=> School, school => school.subjects)
	school: School
}
