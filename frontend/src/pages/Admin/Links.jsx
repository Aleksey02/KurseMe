import { useNavigate } from 'react-router-dom'
import { useEffect, useState } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';
import BotLinkStore from '../../store/botLink';
import ChannelLinkStore from '../../store/channelLinkStore';
import ChatLinkStore from '../../store/chatLinkStore';
import { observer } from 'mobx-react-lite';

const getTypeLink = (type) => {
	switch (type) {
		case 'bot':
			return BotLinkStore.link;
		case 'chat':
			return ChatLinkStore.link;
		case 'channel':
			return ChannelLinkStore.link;
		default:
			return ChannelLinkStore.link;
	}
}

const getTitleLink = (type) => {
	switch (type) {
		case 'bot':
			return 'бота';
		case 'chat':
			return 'чат';
		case 'channel':
			return 'канал';
		default:
			return 'канал';
	}
}

const Links = observer(({isAuth, type}) => {
	const navigate = useNavigate();

	const [link, setLink] = useState(getTypeLink(type));
	const [comLink, setComLink] = useState(BotLinkStore.comLink);
	const [orgLink, setOrgLink] = useState(BotLinkStore.orgLink);
	
	useEffect(() => {
		const admin = isAuth?.isAdmin;
		if(!admin) navigate('/');
		
	}, []);

	const onChange = (event) => {
		setLink(event.target.value);
	}

	const saveLink = async () => {
		try {
			if (type === 'bot') {
				const response = await axios.post(`https://${window.location.host}/api/api/bot-link`, { link, domen: 'base' });
				BotLinkStore.setLink(response.data.link);
			} else if(type === 'chat') {
				const response = await axios.post(`https://${window.location.host}/api/api/chat-link`, { link });
				ChatLinkStore.setLink(response.data.link);
			}
			else {
				const response = await axios.post(`https://${window.location.host}/api/api/channel-link`, { link });
				ChannelLinkStore.setLink(response.data.link);
			}
			toast.success('Ссылка сохранена');
			setTimeout(() => navigate('/'), 1000);
		} catch (error) {
			console.error(error);
			
			const err = error.response?.data?.message || 'Ошибка сохранения';
			toast.error(err.toString());
		}
	};

	const saveAuthLink = async (isEgeballCom = true) => {
		try {
			const response = await axios.post(`https://${window.location.host}/api/api/bot-link`, { link: isEgeballCom ? comLink : orgLink, domen: isEgeballCom ? 'egeball.com' : 'egeball.org' });
			if (isEgeballCom) {
				BotLinkStore.setComLink(comLink);
			} else {
				BotLinkStore.setOrgLink(orgLink);
			}
			toast.success('Ссылка сохранена');
			setTimeout(() => navigate('/'), 1000);
		} catch (error) {
			console.error(error);
			
			const err = error.response?.data?.message || 'Ошибка сохранения';
			toast.error(err.toString());
		}
	};

	return (
		<div className='admin'>
			<div className='admin__header'>
				<button className='admin__back admin__btn' onClick={() => navigate(-1)}>&lt;-Назад</button>
				<h2 className='admin__title'>Ссылка на {getTitleLink(type)}</h2>
			</div>
			<div className='admin__box admin__box-full-width'>
				<input type="text" onChange={onChange} value={link}/>
				<button onClick={saveLink}>Сохранить</button>
			</div>
			{type === 'bot' && <>
				<div className='admin__box admin__box-full-width'>
					<p>Ссылка для подключения авторизации ТГ на egeball.com</p>
					<input type="text" onChange={(e) => setComLink(e.target.value)} value={comLink}/>
					<button onClick={saveAuthLink}>Сохранить</button>
				</div>
				<div className='admin__box admin__box-full-width'>
					<p>Ссылка для подключения авторизации ТГ на egeball.org</p>	
					<input type="text" onChange={(e) => setOrgLink(e.target.value)} value={orgLink}/>
					<button onClick={()=>saveAuthLink(false)}>Сохранить</button>
				</div>
			</>}
		</div>
	)
})

export default Links;