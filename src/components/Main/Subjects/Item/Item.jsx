import classes from './Item.module.scss'
import img from '../../../../assets/images/Subjects/ru.svg'


function Item(){
    return(
        <div className={classes.item}>
            <div className={classes.item__wrapper}>
                <img src={img} alt="" />
                <div className={classes.item__box}>
                    <p className={classes.item__kurs}>3 курса</p>
                    <p className={classes.item__cost}>от 349₽/мес</p>
                </div>
                <button className={classes.item__btn}>Выбрать</button>
            </div>
        </div>
    )
}
export default Item