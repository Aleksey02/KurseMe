import { NavLink, useNavigate } from 'react-router-dom'

function Classes(){
	const navigate = useNavigate();

	return (
		<div className='admin'>
			<div className='admin__header'>
				<button className='admin__back' onClick={() => navigate(-1)}>&lt;-Назад</button>
				<h2 className='admin__title'>Классы</h2>
			</div>
			<div className='admin__box'>
				<NavLink to="/admin/classes/9" className='admin__item'>9</NavLink>
				<NavLink to="/admin/classes/11" className='admin__item'>11</NavLink>
			</div>
		</div>
	)
}

export default Classes