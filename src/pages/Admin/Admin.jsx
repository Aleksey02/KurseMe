
import { useEffect } from 'react';
import { NavLink, useNavigate } from 'react-router-dom'

//egeball-backendcompose-3bd6ad адрес
function Admin({isAuth}){
	const navigate = useNavigate();
	useEffect(() => {
		console.log(isAuth);
		const admin = isAuth?.isAdmin;
		
		if(!admin) navigate('/');
	}, []);
	return (
		<div className='admin'>
			<div className='admin__header'>
				<button className='admin__back admin__btn' onClick={() => navigate(-1)}>&lt;-Назад</button>
				<h2 className='admin__title'>Админ панель</h2>
			</div>
			<div className='admin__box'>
				<NavLink to="/admin/classes" className='admin__item'>Классы</NavLink>
			</div>
		</div>
	)
}

export default Admin