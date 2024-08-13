import classes from './Curses.module.scss'
import Item from './Item/Item'

function Curses(){
    return (
        <div className={classes.curses}>
            <h2 className={classes.curses__title}>Курсы</h2>
            <div className={classes.curses__box}>
                <Item/>
                <Item/>
                <Item/>
            </div>
        </div>
    )
}
export default Curses