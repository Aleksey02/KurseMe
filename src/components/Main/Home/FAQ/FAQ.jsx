import Item from './Item/Item'
import classes from './FAQ.module.scss'

function FAQ({data}){
    
    return (
        <div className={classes.faq}>
            <h2 className={classes.faq__title}>FAQ</h2>
            <div className={classes.faq__box}>
                {data.map((item, index)=><Item info={item} key={index}/>)}
            </div>
        </div>
    )
}

export default FAQ