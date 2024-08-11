import classes from './Item.module.scss'
import img from '../../../../assets/images/School/umskul.svg'

function Item(){
    return (
        <div className={classes.item}>
            <div className={classes.item__img}>
                <img src={img} alt="school logo"  />
            </div> 
            <p className={classes.item__desc}><b>Умскул</b> - крупнейшая онлайн-школа подготовки к экзаменам в России
</p>
            <button className={classes.item__btn}>Выбрать</button>
        </div>
    )
}

export default Item