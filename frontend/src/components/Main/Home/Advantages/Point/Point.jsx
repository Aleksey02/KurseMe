import classes from './Point.module.scss'

function Point({info}){
    return (
        <div className={classes.point}>
            <p className={classes.point__text}>{info}</p>
        </div>
    )
}

export default Point