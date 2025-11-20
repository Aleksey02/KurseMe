import { IsOptional, IsString, IsInt, IsBoolean } from "class-validator";

export class CreateUserDto {
	@IsString()
	username: string;

	@IsInt()
	tgId: number;

	@IsOptional()
	key?: string

	@IsBoolean()
	isSubscribed: boolean

	@IsOptional()
	details?: {
		referral_balance?: number, 
		referrals_count?: number
	}
}
