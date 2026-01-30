import classes from './Auth.module.scss'
import TelegramLogin from '../../components/TelegramLogin/TelegramLogin';
import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom';

function Auth(props) {

	useEffect(()=>{
		if(props.isAuth){
			const navigate = useNavigate();
			navigate('/');
		}
	}, [props.isAuth]);

	return <div className={classes.auth}>
		<div className={classes.auth__tg}>
			<TelegramLogin setIsAuth={props.setIsAuth}/>
		</div>
	</div>
}

export default Auth