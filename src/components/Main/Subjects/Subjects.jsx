import classes from './Subjects.module.scss'
import Item from './Item/Item'
import { useParams } from 'react-router-dom'

function Subjects({data}){
    const { school } = useParams()
    const subjects = data.schools.find(item=>item.name==school).subjects
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