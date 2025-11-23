import { removeTokenFromLocalStorage, setTokenToLocalStorage } from "../../helper/localstorage.helper";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import classes from './Account.module.scss';
import img from '../../assets/images/Account/profile.png'
import { useEffect } from "react";
import axios from "axios";
import { observer } from "mobx-react-lite";
import botLinkStore from "../../store/botLink";

const Account = observer(({isAuth, setIsAuth}) => {
	const navigate = useNavigate();
	const link = `https://t.me/${botLinkStore.link}?start=`

	useEffect(() => {
		setTimeout(async ()=>{
			try {
				const response = await axios.get('https://egeball.com/api/api/auth/loginToBot', {withCredentials: true})
				setIsAuth(response.data)

				if(response.data.key) {
					setTokenToLocalStorage('egeball_key', response.data.key)
				}
			}
			catch{
			console.log('Ошибка получения пользователя', error);
			// Пользователь не авторизован, или ошибка сети
			};
		}, 1000)
		
	}, [])

	const logout = () => {
		removeTokenFromLocalStorage('egeball_key');
		toast.success('Вы успешно вышли');
		navigate('/');
		setIsAuth(false);
	}

	const copyReferralLink = () => {
		navigator.clipboard.writeText(link + isAuth.tg_id);
		toast.success('Скопировано');
	}

	return <div className={classes.account}>
		{isAuth ? <>
			<h2 className={classes.account__title}>Личный кабинет</h2>
			<div className={classes.account__yourId}>
				<img src={isAuth?.photo_url?.length ? isAuth.photo_url : img} alt="profile image" />
				<p>Ваш ID: <span>{isAuth.tg_id}</span></p>
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
						<span>{isAuth?.details?.referrals_count ?? 0}</span>
					</div>
				</div>
				<div className={classes.account__referal}>
					<h4>Заработано с рефералов</h4>
					<div className={classes.account__box}>
						<span>{isAuth?.details?.referral_balance ?? 0}₽</span>
					</div>
				</div>
			</div>
		</>: 'Страница не найдена'}
	</div>
})

export default Account