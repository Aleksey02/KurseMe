import classes from './Item.module.scss'
import img11 from '../../../../assets/images/Home/11.svg';
import img9 from '../../../../assets/images/Home/9.svg';

const images = {
  '11': img11,
  '9': img9,
};

function Item({numberClass, text}) {
    return (
        <div className={classes.item}>
            <img src={images[numberClass]} alt="11 number image" className={classes.item__img} />
            <p className={classes.item__desc}>{text}</p>
            <button className={classes.item__btn}>Выбрать предмет</button>
        </div>
    )
}
export default Item