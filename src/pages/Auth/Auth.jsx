import classes from './Auth.module.scss'
import { useState } from 'react'

function Auth() {
	const [isRegister, setIsRegister] = useState(false);
	return <div className={classes.auth}>
		<div className={classes.auth__box}>
			<div className={classes.auth__headerButtons}>
				<button className={classes.auth__headerButton + ' ' + (isRegister ? '' : classes.active)} onClick={() => setIsRegister(false)}>Войти</button>
				<button className={classes.auth__headerButton + ' ' + (isRegister ? classes.active : '')} onClick={() => setIsRegister(true)}>Регистрация</button>
			</div>
			<div className={classes.auth__form}>
				<div className={classes.auth__input}>
					<label htmlFor="login">Логин</label>
					<input type="text" id='login' name='login' />
				</div>
				<div className={classes.auth__input}>
					<label htmlFor="password">Пароль</label>
					<input type="text" id='password' name='password' />
				</div>
				<button className={classes.auth__forgetPassword}>Забыл пароль?</button>
				<button className={classes.auth__btn}>Войти</button>
			</div>
		</div>
	</div>
}

export default Auth