import { useParams } from 'react-router-dom'
import classes from './Curses.module.scss'
import Item from './Item/Item'

function Curses({data}){
    const {school, subject} = useParams()
    const curses = data.schools.find(item=>item.name==school).subjects.find(item=>item.name==subject).curses;
    
    return (
        <div className={classes.curses}>
            <h2 className={classes.curses__title}>Курсы</h2>
            <div className={classes.curses__box}>
                {curses.map(curse=><Item curse={curse}/>)}
            </div>
        </div>
    )
}
export default Curses