import { IsInt, IsNotEmpty, IsOptional, IsString } from 'class-validator';
import { School } from 'src/schools/entities/school.entity';

export class CreateSubjectDto {
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
		school?: School
}
