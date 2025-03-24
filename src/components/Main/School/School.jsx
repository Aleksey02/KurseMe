import { useState, useEffect } from 'react'
import Item from './Item/Item'
import classes from './School.module.scss'
import axios from 'axios'

function School({data}){
    const [schools, setSchools] = useState([]);
    useEffect(() => {
        const schools = axios.get('http://localhost:3000/api/schools')
            .then(response => setSchools(response.data))
            .catch(error => console.error(error));
    }, []);

    return (
        <div className={classes.school}>
            <h2 className={classes.school__title}>Онлайн-школы</h2>
            <div className={classes.school__box}>
                {data.schools.map((item, index)=><Item info={item} key={index} />)}
                {schools.map((item, index)=><Item info={item} key={index} />)}
            </div>
        </div>
    )
}
export default School