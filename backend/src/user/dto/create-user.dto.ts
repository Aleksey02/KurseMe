import { IsOptional, IsString, IsInt } from "class-validator";

export class CreateUserDto {
	@IsString()
	username: string;

	@IsInt()
	tgId: number;

	@IsOptional()
	key?: string
}
