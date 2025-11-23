import React from 'react';
import TelegramLogin from '../../components/TelegramLogin/TelegramLogin';
import { useParams } from 'react-router-dom';

function Player({isAuth, setIsAuth}) {
	if(!isAuth) {
		return <div style={{
			display: 'flex',
			flexDirection: 'column',
			justifyContent: 'center',
			alignItems: 'center'
		}}>
			<p>Чтобы смотреть видео материалы нужно войти в аккаунт</p>
		<div className="auth__tg">
			<TelegramLogin setIsAuth={setIsAuth}/>
		</div>
		</div>
	}

	const { title } = useParams();

	return (
		<div>
			<h1>Player</h1>
			{isAuth.is_subscribed || isAuth.isAdmin
				? <div style={{position: 'relative', paddingTop: '56.25%', width: '100%'}}>
					<iframe 
						src={`https://kinescope.io/embed/${title}?watermark=egeball.com`}
						allow="autoplay; fullscreen; picture-in-picture; encrypted-media; gyroscope; accelerometer; clipboard-write; screen-wake-lock;" 
						frameBorder="0" 
						allowFullScreen 
						style={{position: 'absolute', width:' 100%', height: '100%', top: '0', left: '0'}}>
					</iframe>
				</div>
				: <>
					<p>Плеер доступен только аккаунтом с подпиской. Если у вас имеется подписка, попробуйте перезайти в аккаунт</p>
				</>
			}
		</div>
	);
}

export default Player;