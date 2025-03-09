import { NavLink, useParams, useNavigate } from 'react-router-dom'
import umskul from '../../assets/images/School/umskul.svg'
import axios from 'axios';
import { useEffect, useState, useRef } from 'react'


function SchoolAdmin(){
	const { classAdmin } = useParams();
	const navigate = useNavigate();
	const [schools, setSchools] = useState([]);
	const [currentSchool, setCurrentSchool] = useState(null);
	const [isPopupOpen, setIsPopupOpen] = useState(false);
	const [isChangeMode, setIsChangeMode] = useState(false);

	const titleRef = useRef('');
	const descRef = useRef('');
	const imageRef = useRef('');

	const addSchool = async (e, id) => {
		e.preventDefault();
		const name = titleRef.current.value;
		const desc = descRef.current.value;
		const image = imageRef.current.files[0];

		if(name && desc && image || isChangeMode){
			const formData = new FormData();
			formData.append('name', name);
			formData.append('description', desc);
			formData.append('imageUrl', image);
			formData.append('grade', classAdmin);
			
			try {
				if(isChangeMode){
					await axios.patch(`http://localhost:3000/api/schools/${id}`, formData, {
						headers: { 'Content-Type': 'multipart/form-data' },
					});
				}else{
					await axios.post(`http://localhost:3000/api/schools`, formData, {
						headers: { 'Content-Type': 'multipart/form-data' },
					});
				}
			} catch (error) {
				console.error('Ошибка при создании школы:', error);
		}
		window.location.reload();
		}
		
	}

	const deleteSchool = async (id, e) => {
		e.preventDefault();
		axios.delete(`http://localhost:3000/api/schools/${id}`);
		window.location.reload();
	}

	const closePopup = e => {
		e.preventDefault();
		setIsPopupOpen(false);
		setIsChangeMode(false);
		setCurrentSchool(null);
		titleRef.current.value = '';
		descRef.current.value = '';
		imageRef.current.value = '';
	}
	const changeSchool = async (id, e) => {
		e.preventDefault();
		axios.get(`http://localhost:3000/api/schools/school/${id}`)
			.then(response => {
				const {name, description} = response.data;
				setCurrentSchool(response.data)
				titleRef.current.value = name;
				descRef.current.value = description;
				
				setIsChangeMode(true);
				setIsPopupOpen(true);
				
			})
			.catch(error => console.error(error));

	}
	const handleImageChange = event => {
		const file = event.target.files[0];
		if (file) {
		const reader = new FileReader();
		reader.onloadend = () => {
			setCurrentSchool({
				...currentSchool,
				imageUrl: reader.result
			});
			
		};
		reader.readAsDataURL(file);
		}
	}
	useEffect(() => {
		const response = axios.get(`http://localhost:3000/api/schools/${classAdmin}`)
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
				{schools.length === 0 && <p>Нет школ</p>}
				{schools.map(school=><NavLink to={`/admin/classes/${classAdmin}/${school.id}`} className='admin__school admin__item' key={school.id}>
					<div className='admin__school-title'>
						<img src={`http://localhost:3000/${school.imageUrl}`} alt="" />
						<span>{school.name}</span>
					</div>
					<div>
					<button onClick={(e) => changeSchool(school.id, e)}>Изменить</button>
					<button onClick={(e) => deleteSchool(school.id, e)}>Удалить</button>
					</div>
				</NavLink>)}
				
			</div>

			<div className="admin-popup-add" style={{display: isPopupOpen ? 'flex' : 'none'}}>
				<div className="admin-popup-add__background">
					<h3 className="admin-popup-add__title">{isChangeMode ? 'Изменить' : 'Добавить'} школу</h3>
					<form className="admin-popup-add__form">
						<input type="text" placeholder='Название школы' name='title' ref={titleRef} />
						<textarea type="" placeholder='Описание школы' name='desc' ref={descRef} />
						<div className="admin-popup-add__form-image">
							<label htmlFor="img">Картинка школы</label>
							{isChangeMode && <img src={`${imageRef.current.value ? currentSchool.imageUrl: `http://localhost:3000/${currentSchool.imageUrl}`}`} alt="" className='admin-popup-add__form-image-change'/>}
							<input type="file" placeholder='Картинка школы' name='img' ref={imageRef} onChange={handleImageChange} />
						</div>

						<div className="admin-popup-add__btns">
							<button className="admin-popup-add__btn" onClick={closePopup}>Отмена</button>
							<button className="admin-popup-add__btn" onClick={(e) => addSchool(e, currentSchool?.id)}>
								{isChangeMode ? 'Изменить' : 'Добавить'}
							</button>
						</div>
					</form>

				</div>
			</div>
		</div>
	)
}

export default SchoolAdmin