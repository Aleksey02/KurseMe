export interface IUserData {
	email: string
	password: string
}

export interface IUser{
	email: string
	password: string
	isAdmin?: boolean
}

export interface IResponseUser {
	email: string
	id: number
	createdAt: string
	updatedAt: string
	isAdmin: boolean
	password: string
}

export interface IResponseUserData {
	token: string
	user: IResponseUser
}