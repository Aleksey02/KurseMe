import { NavLink, useParams, useNavigate } from 'react-router-dom'
import umskul from '../../assets/images/School/umskul.svg'
import axios from 'axios';
import { useEffect, useState, useRef } from 'react'


function SchoolAdmin(){
	const { classAdmin } = useParams();
	const navigate = useNavigate();
	const [schools, setSchools] = useState([]);
	const [isPopupOpen, setIsPopupOpen] = useState(false);

	const titleRef = useRef('');
	const descRef = useRef('');
	const imageRef = useRef('');

	const addSchool = async e => {
		e.preventDefault();
		const name = titleRef.current.value;
		const desc = descRef.current.value;
		const image = imageRef.current.files[0];
		console.log(image);
		
		if(name && desc && image){
			const formData = new FormData();
			formData.append('name', name);
			formData.append('desc', desc);
			formData.append('image', image);
			formData.append('gradeId', classAdmin);
			
			
			try {
				const response = await axios.post(`http://localhost:3000/schools`, formData, {
				  headers: { 'Content-Type': 'multipart/form-data' },
				});
				console.log('Школа добавлена:', response.data);
			  } catch (error) {
				console.error('Ошибка при создании школы:', error);
			  }
		}
		
	}

	const closePopup = e => {
		e.preventDefault();
		setIsPopupOpen(false);
	}

	useEffect(() => {
		axios.get(`http://localhost:3000/grades/${classAdmin}/schools`)
			.then(response => setSchools(response.data))
			.catch(error => console.error(error));
		}, []);
	
	return (
		<div className='admin'>
			<div className='admin__header'>
				<button className='admin__back' onClick={() => navigate(-1)}>&lt;-Назад</button>
				<h2 className='admin__title'>Школы</h2>
				<button className='admin__add' onClick={() => setIsPopupOpen(true)}>Добавить</button>
			</div>
			<div className='admin__box'>
				{schools.map(school=><NavLink to={`/admin/classes/${classAdmin}/${school.id}`} className='admin__school admin__item' key={school.id}>
					<div className='admin__school-title'>
						<img src={umskul} alt="" />
						<span>{school.title}</span>
					</div>
					<div>
					<button>Изменить</button>
					<button>Удалить</button>
					</div>
				</NavLink>)}
				
			</div>

			<div className="admin-popup-add" style={{display: isPopupOpen ? 'flex' : 'none'}}>
				<div className="admin-popup-add__background">
					<h3 className="admin-popup-add__title">Добавить школу</h3>
					<form className="admin-popup-add__form">
						<input type="text" placeholder='Название школы' name='title' ref={titleRef} />
						<textarea type="" placeholder='Описание школы' name='desc' ref={descRef} />
						<div className="admin-popup-add__form-image">
							<label htmlFor="img">Картинка школы</label>
							<input type="file" placeholder='Картинка школы' name='img' ref={imageRef} />
						</div>

						<div className="admin-popup-add__btns">
							<button className="admin-popup-add__btn" onClick={closePopup}>Отмена</button>
							<button className="admin-popup-add__btn" onClick={addSchool}>Добавить</button>
						</div>
					</form>

				</div>
			</div>
		</div>
	)
}

export default SchoolAdmin