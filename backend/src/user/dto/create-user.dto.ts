import { IsOptional, IsString, IsInt, IsBoolean } from "class-validator";

export class CreateUserDto {
	@IsString()
	username: string;

	@IsInt()
	tg_id: number;

	@IsOptional()
	key?: string

	@IsBoolean()
	is_subscribed: boolean

	@IsOptional()
	details?: {
		referral_balance?: number, 
		referrals_count?: number
	}
}
