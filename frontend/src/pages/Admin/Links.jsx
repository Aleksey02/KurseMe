import { useNavigate } from 'react-router-dom'
import { useEffect, useState } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';
import BotLinkStore from '../../store/botLink';
import { observer } from 'mobx-react-lite';

const Links = observer(({isAuth}) => {
	const navigate = useNavigate();
	const [link, setLink] = useState(BotLinkStore.link);
	
	useEffect(() => {
		const admin = isAuth?.isAdmin;
		if(!admin) navigate('/');
		
	}, []);

	const onChange = (event) => {
		setLink(event.target.value);
	}

	const saveLink = async () => {
		try {
			axios.post('https://egeball.com/api/api/bot-link', {link})
				.then(response => {
					BotLinkStore.setLink(response.data);
					toast.success('Ссылка сохранена');
					
				})
				.catch(error => {
					toast.success('Ошибка сохранения');
					console.error(error);
				})
				navigate('/');
		} catch (error) {
			const err = error.response?.data.message;
			console.log(error);
			
			toast.error(err?.toString());
		}
	}

	return (
		<div className='admin'>
			<div className='admin__header'>
				<button className='admin__back admin__btn' onClick={() => navigate(-1)}>&lt;-Назад</button>
				<h2 className='admin__title'>Ссылка на бота</h2>
			</div>
			<div className='admin__box admin__box-full-width'>
				<input type="text" onChange={onChange} value={link}/>
				<button onClick={saveLink}>Сохранить</button>
			</div>
		</div>
	)
})

export default Links;