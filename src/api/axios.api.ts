import axios from 'axios';
import { getTokenFromLocalStorage } from '../helper/localstorage.helper';

export const instance = axios.create({
	baseURL: 'https://egeball.com/api/api',
	headers: {
		Authorization: 'Bearer ' + getTokenFromLocalStorage(),
	}
});