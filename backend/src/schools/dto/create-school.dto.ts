import { IsInt, IsNotEmpty, IsOptional, IsString } from 'class-validator';
import { Subject } from 'src/subjects/entities/subject.entity';

export class CreateSchoolDto {
	@IsNotEmpty()
	@IsString()
	name: string;

	@IsNotEmpty()
	@IsString()
	description: string;

	@IsOptional()
	imageUrl?: string;

	@IsNotEmpty()
	@IsInt()
	grade: number;

	@IsOptional()
	subjects?: Subject[]
}
