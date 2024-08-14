import classes from './Advantages.module.scss'
import Point from './Point/Point'

function Advantages(){
    return (
        <div className={classes.advantages}>
            <h2 className={classes.advantages__title}>Преимущества</h2>
            <div className={classes.advantages__box}>
                <Point />
                <Point />
                <Point />
                <Point />
                <Point />
                <Point />
            </div>
        </div>
    )
}

export default Advantages