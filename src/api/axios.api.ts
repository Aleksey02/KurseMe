import axios from 'axios';
import { getTokenFromLocalStorage } from '../helper/localstorage.helper';

export const instance = axios.create({
	baseURL: 'https://egeball-backendcompose-3bd6ad-324ba3-109-107-157-189.traefik.me/api',
	headers: {
		Authorization: 'Bearer ' + getTokenFromLocalStorage(),
	}
});