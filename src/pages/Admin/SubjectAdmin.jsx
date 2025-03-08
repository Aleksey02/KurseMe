import { useParams, useNavigate } from 'react-router-dom'
import ru_lang from '../../assets/images/Subjects/russianLang.svg'
import axios from 'axios';
import { useEffect, useState, useRef } from 'react'

function SubjectAdmin(){
	const { schoolId, classAdmin } = useParams();
	const navigate = useNavigate();
	const [subjects, setSubjects] = useState([]);
	const [currentSubject, setCurrentSubject] = useState(null);
	const [currentSchool, setCurrentSchool] = useState(null);
	const [isPopupOpen, setIsPopupOpen] = useState(false);
	const [isChangeMode, setIsChangeMode] = useState(false);

	const titleRef = useRef('');
	const costRef = useRef('');
	const imageRef = useRef('');

	useEffect(() => {
		axios.get(`http://localhost:3000/api/subjects/${schoolId}`)
			.then(response => setSubjects(response.data))
			.catch(error => console.error(error));

		axios.get(`http://localhost:3000/api/schools/school/${schoolId}`)
			.then(response => setCurrentSchool(response.data))
			.catch(error => console.error(error));
		}, []);
	
	const addSubject = async (e, id) => {
		e.preventDefault();
		const name = titleRef.current.value;
		const cost = costRef.current.value;
		const image = imageRef.current.files[0];
		console.log(name, cost, image);
		

		if((name && cost>0 && image) || (isChangeMode && name && cost>0)){
			
			const formData = new FormData();
			formData.append('name', name);
			formData.append('cost', cost);
			formData.append('imageUrl', image);
			formData.append('school', schoolId);
			console.log(name, cost, image, schoolId);
			
			try {
				if(isChangeMode){
					await axios.patch(`http://localhost:3000/api/subjects/${id}`, formData, {
						headers: { 'Content-Type': 'multipart/form-data' },
					});
				}else{
					await axios.post(`http://localhost:3000/api/subjects`, formData, {
						headers: { 'Content-Type': 'multipart/form-data' },
					});
				}
			} catch (error) {
				console.error('Ошибка при создании школы:', error);
		}
		window.location.reload();
		}
		
	}

	const deleteSubject = async (id, e) => {
		e.preventDefault();
		axios.delete(`http://localhost:3000/api/subjects/${id}`);
		window.location.reload();
	}

	const closePopup = e => {
		e.preventDefault();
		setIsPopupOpen(false);
		setIsChangeMode(false);
		setCurrentSubject(null);
		titleRef.current.value = '';
		costRef.current.value = '';
		imageRef.current.value = '';
	}
	const changeSubject = async (id, e) => {
		e.preventDefault();
		axios.get(`http://localhost:3000/api/subjects/${schoolId}/${id}`)
			.then(response => {
				const {name, cost} = response.data;
				setCurrentSubject(response.data)
				titleRef.current.value = name;
				costRef.current.value = cost;
				
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
			setCurrentSubject({
				...currentSubject,
				imageUrl: reader.result
			});
			
		};
		reader.readAsDataURL(file);
		}
	}

	return (
		<div className='admin'>
			<div className='admin__header'>
				<button className='admin__back' onClick={() => navigate(-1)}>&lt;-Назад</button>
				<h2 className='admin__title'>Предметы {currentSchool && currentSchool.name}</h2>
				<button className='admin__add' onClick={() => setIsPopupOpen(true)}>Добавить</button>
			</div>
			<div className='admin__box'>
				{subjects.length === 0 && <p>Нет предметов</p>}
				{subjects.map(subject=><div className='admin__school admin__item' key={subject.id}>
									<div className='admin__school-title admin__school-title--subject'>
										<img src={`http://localhost:3000/${subject.imageUrl}`} alt="" />
										<span>{subject.name}</span>
										<span>{subject.cost}</span>
									</div>
									<div>
										<button onClick={e=>changeSubject(subject.id, e)}>Изменить</button>
										<button onClick={e=>deleteSubject(subject.id, e)}>Удалить</button>
									</div>
								</div>)}
			</div>
			<div className="admin-popup-add" style={{display: isPopupOpen ? 'flex' : 'none'}}>
				<div className="admin-popup-add__background">
					<h3 className="admin-popup-add__title">{isChangeMode ? 'Изменить' : 'Добавить'} предмет</h3>
					<form className="admin-popup-add__form">
						<input type="text" placeholder='Название предмета' name='title' ref={titleRef} />
						<input type="number" placeholder='Стоимость предмета' name='cost' ref={costRef} min={0} />
						<div className="admin-popup-add__form-image">
							<label htmlFor="img">Картинка предмета</label>
							{isChangeMode && <img src={`${imageRef.current.value ? currentSubject.imageUrl: `http://localhost:3000/${currentSubject.imageUrl}`}`} alt="" className='admin-popup-add__form-image-change'/>}
							<input type="file" placeholder='Картинка предмета' name='img' ref={imageRef} onChange={handleImageChange} />
						</div>

						<div className="admin-popup-add__btns">
							<button className="admin-popup-add__btn" onClick={closePopup}>Отмена</button>
							<button className="admin-popup-add__btn" onClick={(e) => addSubject(e, currentSubject?.id)}>
								{isChangeMode ? 'Изменить' : 'Добавить'}
							</button>
						</div>
					</form>

				</div>
			</div>
		</div>
	)
}

export default SubjectAdmin