
import { NavLink, useNavigate } from 'react-router-dom'

function Admin(){
	const navigate = useNavigate();
	return (
		<div className='admin'>
			<div className='admin__header'>
				<button className='admin__back' onClick={() => navigate(-1)}>&lt;-Назад</button>
				<h2 className='admin__title'>Админ панель</h2>
			</div>
			<div className='admin__box'>
				<NavLink to="/admin/classes" className='admin__item'>Классы</NavLink>
			</div>
		</div>
	)
}

export default Admin