import classes from './Advantages.module.scss'
import Point from './Point/Point'

function Advantages({data}){
    
    return (
        <div className={classes.advantages} data-aos="zoom-in-up">
            <h2 className={classes.advantages__title}>Преимущества</h2>
            <div className={classes.advantages__box}>
                {data.map((item, index)=><Point info={item} key={index}/>)}
            </div>
        </div>
    )
}

export default Advantages