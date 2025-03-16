import { removeTokenFromLocalStorage } from "../../helper/localstorage.helper";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import classes from './Account.module.scss';

function Account({isAuth, setIsAuth}) {
	const navigate = useNavigate();
	const logout = () => {
		removeTokenFromLocalStorage('token');
		toast.success('Вы успешно вышли');
		navigate('/');
		setIsAuth(false);
	}

	return <div className={classes.account}>
		{isAuth ? <>
			<h2>Страница аккаунта</h2>
			<p>Введутся технические работы</p>
			<button onClick={logout}>Выйти из аккаунта</button>
		</>: 'Страница не найдена'}
	</div>
}

export default Account