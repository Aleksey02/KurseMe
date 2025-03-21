import axios from 'axios';
import { getTokenFromLocalStorage } from '../helper/localstorage.helper';

export const instance = axios.create({
	baseURL: 'https://egeball-backendcompose-7342a6/api',
	headers: {
		Authorization: 'Bearer ' + getTokenFromLocalStorage(),
	}
});