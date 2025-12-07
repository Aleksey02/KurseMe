import axios from 'axios';
import { getTokenFromLocalStorage } from '../helper/localstorage.helper';

export const instance = axios.create({
	baseURL: `https://${window.location.host}/api/api`,
	headers: {
		Authorization: 'Bearer ' + getTokenFromLocalStorage(),
	}
});