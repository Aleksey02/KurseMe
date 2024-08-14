import classes from './Advantages.module.scss'
import Point from './Point/Point'

function Advantages({data}){
    
    return (
        <div className={classes.advantages}>
            <h2 className={classes.advantages__title}>Преимущества</h2>
            <div className={classes.advantages__box}>
                {data.map(item=><Point info={item}/>)}
            </div>
        </div>
    )
}

export default Advantages