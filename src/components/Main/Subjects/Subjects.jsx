import classes from './Subjects.module.scss'
import Item from './Item/Item'

function Subjects(){
    return (
        <div className={classes.subjects}>
            <h2 className={classes.subjects__title}>Предметы</h2>
            <div className={classes.subjects__box}>
                <Item />
                <Item />
                <Item />
                <Item />
                <Item />
                <Item />
                <Item />
                <Item />
                <Item />
                <Item />
                
            </div>
        </div>
    )
}

export default Subjects