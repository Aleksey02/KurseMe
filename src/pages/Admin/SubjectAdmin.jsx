import { useParams, useNavigate } from 'react-router-dom'
import ru_lang from '../../assets/images/Subjects/russianLang.svg'
import axios from 'axios';
import { useEffect, useState } from 'react'

function SubjectAdmin(){
	const { schoolId, classAdmin } = useParams();
	const navigate = useNavigate();
	const [subjects, setSubjects] = useState([]);

	useEffect(() => {
		axios.get(`http://localhost:3000/grades/${classAdmin}/schools/${schoolId}/subjects`)
			.then(response => setSubjects(response.data))
			.catch(error => console.error(error));
		}, []);
	console.log(subjects);
	
	return (
		<div className='admin'>
			<div className='admin__header'>
				<button className='admin__back' onClick={() => navigate(-1)}>&lt;-Назад</button>
				<h2 className='admin__title'>Предметы</h2>
			</div>
			<div className='admin__box'>
				{subjects.map(subject=><div className='admin__school admin__item' key={subject.id}>
									<div className='admin__school-title admin__school-title--subject'>
										<img src={ru_lang} alt="" />
										<span>{subject.name}</span>
									</div>
									<div>
									<button>Изменить</button>
									<button>Удалить</button>
									</div>
								</div>)}
			</div>
		</div>
	)
}

export default SubjectAdmin