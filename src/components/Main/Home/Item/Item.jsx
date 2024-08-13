import classes from './Item.module.scss'
import img11 from '../../../../assets/images/Home/11.svg';
import img9 from '../../../../assets/images/Home/9.svg';
import {NavLink} from "react-router-dom";

const images = {
  '11': img11,
  '9': img9,
};

function Item({numberClass, text}) {
    return (
        <div className={classes.item}>
            <img src={images[numberClass]} alt="11 number image" className={classes.item__img} />
            <p className={classes.item__desc}>{text}</p>
            <NavLink to={'/' + numberClass} className={classes.item__btn}>Выбрать предмет</NavLink>
        </div>
    )
}
export default Item