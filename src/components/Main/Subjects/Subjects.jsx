import classes from './Subjects.module.scss'
import Item from './Item/Item'

function Subjects({data}){
    const school = data.schools.find(item=>item.name==window.location.pathname.split('/').reverse()[0])
    
    return (
        <div className={classes.subjects}>
            <h2 className={classes.subjects__title}>Предметы</h2>
            <div className={classes.subjects__box}>
                {school.subjects.map(item=><Item info={item}/>)}
                
            </div>
        </div>
    )
}

export default Subjects