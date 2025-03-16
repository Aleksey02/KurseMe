import { toast } from 'react-toastify';
import { AuthService } from '../../services/auth.service';
import classes from './Auth.module.scss'
import { useState } from 'react'
import { setTokenToLocalStorage } from '../../helper/localstorage.helper';
import { useNavigate } from 'react-router-dom';

function Auth(props) {
	const [isRegister, setIsRegister] = useState(false);
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const navigate = useNavigate();

	const registrationHandler = async (e) => {
		try {
			e.preventDefault();
			const data = await AuthService.registration({email, password});
			if(data){
				toast.success('Регистрация прошла успешно');
				setIsRegister(false);
			}
		} catch (error) {
			const err = error.response?.data.message;
			toast.error(err.toString());
		}
	}

	const loginHandler = async (e) => {
		try {
			e.preventDefault();
			const data = await AuthService.login({email, password});
			if(data){
				setTokenToLocalStorage('token', data.token);
				props.setIsAuth(data);
				toast.success('Вход прошел успешно');
				navigate('/');
			}
		} catch (error) {
			const err = error.response?.data.message;
			console.log(error);
			
			toast.error(err?.toString());
		}
	}

	return <div className={classes.auth}>
		<div className={classes.auth__box}>
			<div className={classes.auth__headerButtons}>
				<button className={classes.auth__headerButton + ' ' + (isRegister ? '' : classes.active)} onClick={() => setIsRegister(false)}>Войти</button>
				<button className={classes.auth__headerButton + ' ' + (isRegister ? classes.active : '')} onClick={() => setIsRegister(true)}>Регистрация</button>
			</div>
			<form className={classes.auth__form} onSubmit={isRegister ? registrationHandler : loginHandler}>
				<div className={classes.auth__input}>
					<label htmlFor="login">Логин</label>
					<input type="text" id='login' name='login' onChange={(e) => setEmail(e.target.value)}/>
				</div>
				<div className={classes.auth__input}>
					<label htmlFor="password">Пароль</label>
					<input type="text" id='password' name='password' onChange={(e) => setPassword(e.target.value)}/>
				</div>
				<button className={classes.auth__forgetPassword} type='button'>Забыл пароль?</button>
				<button className={classes.auth__btn} type='submit'>{isRegister ? 'Зарегистрироваться' : 'Войти'}</button>
			</form>
		</div>
	</div>
}

export default Auth