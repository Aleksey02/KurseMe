import Item from './Item/Item'
import classes from './School.module.scss'

function School(){
    return (
        <div className={classes.school}>
            <h2 className={classes.school__title}>Онлайн-школы</h2>
            <div className={classes.school__box}>
                <Item />
                <Item />
                <Item />
                <Item />
            </div>
        </div>
    )
}
export default School