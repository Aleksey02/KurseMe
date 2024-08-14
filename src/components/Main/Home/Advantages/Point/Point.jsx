import classes from './Point.module.scss'
import img from '../../../../../assets/images/Home/Point/point.svg'

function Point(){
    return (
        <div className={classes.point}>
            {/* <img src={img} alt="advantages point" className={classes.point__img}/> */}
            {/* <div className={classes.point__ok}>✔</div>{} */}
            <p className={classes.point__text}>Огромный опыт слива курсов и обхода любых платформ</p>
        </div>
    )
}

export default Point