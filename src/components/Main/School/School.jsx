import Item from './Item/Item'
import classes from './School.module.scss'

function School({data}){
    return (
        <div className={classes.school}>
            <h2 className={classes.school__title}>Онлайн-школы</h2>
            <div className={classes.school__box}>
                {data.schools.map((item, index)=><Item info={item} key={index} />)}
            </div>
        </div>
    )
}
export default School