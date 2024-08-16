import Item from './Item/Item'
import classes from './FAQ.module.scss'

function FAQ({data}){
    
    return (
        <div className={classes.faq}>
            <h2 className={classes.faq__title}>FAQ</h2>
            <div className={classes.faq__box}>
                {data.map((item, index)=><Item info={item} key={index}/>)}
            </div>
            <a href="https://t.me/egeball12_bot" target='_blank' className={classes.faq__link}>КУПИТЬ КУРСЫ</a>
        </div>
    )
}

export default FAQ