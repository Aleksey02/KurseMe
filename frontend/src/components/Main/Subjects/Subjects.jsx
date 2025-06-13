import classes from './Subjects.module.scss'
import Item from './Item/Item'
import { useParams } from 'react-router-dom'
import axios from 'axios';
import { useEffect, useState } from 'react';

function Subjects({data}){
    const [subjects, setSubjects] = useState([]);
    const { school } = useParams();
    useEffect(()=>{
        if(isNaN(school)){
            setSubjects(data.schools.find(item=>item.name==school).subjects);
        } else {
            axios.get(`https://egeball.com/api/api/subjects/${school}`)
                .then(response => setSubjects(response.data))
                .catch(error => console.error(error));
        }
    }, [])
    
    return (
        <div className={classes.subjects}>
            <h2 className={classes.subjects__title}>Предметы</h2>
            <div className={classes.subjects__box}>
                {subjects.map((item, index)=><Item info={item} key={index} />)}
                
            </div>
        </div>
    )
}

export default Subjects