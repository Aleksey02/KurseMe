import { removeTokenFromLocalStorage, setTokenToLocalStorage } from "../../helper/localstorage.helper";
import { toast } from "react-toastify";
import classes from './Account.module.scss';
import img from '../../assets/images/Account/profile.png'
import { useEffect } from "react";
import axios from "axios";
import { observer } from "mobx-react-lite";
import botLinkStore from "../../store/botLink";
import { useNavigate } from 'react-router-dom'

const Account = observer(({isAuth, setIsAuth}) => {
	const navigate = useNavigate();
	const link = `https://t.me/${botLinkStore.link}?start=`

	useEffect(() => {
		setTimeout(async ()=>{
			try {
				console.log('start response');
				
				const response = await axios.get(`https://${window.location.host}/api/api/auth/loginToBot`, {withCredentials: true})
				await console.log(response);
				setIsAuth(response.data)

				if(response.data.key) {
					setTokenToLocalStorage('egeball_key', response.data.key)
				}
			}
			catch(error) {
			console.log('Ошибка получения пользователя', error);
			// Пользователь не авторизован, или ошибка сети
			if (error.response.status === 401) {
				removeTokenFromLocalStorage('egeball_key')
				navigate('/')
			}
			};
		}, 500)
		
	}, [])

	const logout = () => {
		removeTokenFromLocalStorage('egeball_key');
		toast.success('Вы успешно вышли');
		navigate('/');
		setIsAuth(false);
	}

	const copyReferralLink = () => {
		navigator.clipboard.writeText(link + isAuth.tgId);
		toast.success('Скопировано');
	}

	return <div className={classes.account}>
		{isAuth ? <>
			<h2 className={classes.account__title}>Личный кабинет</h2>
			<div className={classes.account__yourId}>
				<img src={isAuth?.photo_url?.length ? isAuth.photo_url : img} alt="profile image" />
				<p>Ваш ID: <span>{isAuth.tgId}</span></p>
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
						<span>{isAuth?.referrals_count ?? 0}</span>
					</div>
				</div>
				<div className={classes.account__referal}>
					<h4>Заработано с рефералов</h4>
					<div className={classes.account__box}>
						<span>{isAuth?.referral_balance ?? 0}₽</span>
					</div>
				</div>
			</div>
		</>: 'Загрузка...'}
	</div>
})

export default Account