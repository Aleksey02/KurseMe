import { removeTokenFromLocalStorage } from "../../helper/localstorage.helper";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import classes from './Account.module.scss';
import img from '../../assets/images/Account/profile.png'
import { useEffect } from "react";
import axios from "axios";

function Account({isAuth, setIsAuth}) {
	const navigate = useNavigate();

	useEffect(() => {
		const response = axios.get('https://egeball.lol/v1/api/me/');
		console.log(response);
		
	}, [])

	const logout = () => {
		removeTokenFromLocalStorage('token');
		toast.success('Вы успешно вышли');
		navigate('/');
		setIsAuth(false);
	}

	const copyReferralLink = () => {
		navigator.clipboard.writeText('https://egeball.com/id' + isAuth.id);
		toast.success('Скопировано');
	}

	return <div className={classes.account}>
		{isAuth ? <>
			<h2 className={classes.account__title}>Личный кабинет</h2>
			<div className={classes.account__yourId}>
				<img src={isAuth.photo_url.length ? isAuth.photo_url : img} alt="profile image" />
				<p>Ваш ID: <span>{isAuth.id}</span></p>
				<button onClick={logout} className={classes.account__btn}>Выйти</button>
			</div>
			<h3 className={classes.account__subtitle}>Реферальная система</h3>
			<div className={classes.account__referals}>
				<div className={classes.account__referal}>
					<h4>Ваша реферальная система</h4>
					<div className={classes.account__box}>
						<button className={classes.account__btn} onClick={copyReferralLink}>Скопировать</button>
					</div>
				</div>
				<div className={classes.account__referal}>
					<h4>Кол-во рефералов</h4>
					<div className={classes.account__box}>
						<span>0</span>
					</div>
				</div>
				<div className={classes.account__referal}>
					<h4>Заработано с рефералов</h4>
					<div className={classes.account__box}>
						<span>0₽</span>
					</div>
				</div>
			</div>
		</>: 'Страница не найдена'}
	</div>
}

export default Account