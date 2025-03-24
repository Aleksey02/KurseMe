import axios from 'axios';
import { getTokenFromLocalStorage } from '../helper/localstorage.helper';

export const instance = axios.create({
	baseURL: 'http://localhost:3000/api',//'https://egeball.com/api/api',
	headers: {
		Authorization: 'Bearer ' + getTokenFromLocalStorage(),
	}
});