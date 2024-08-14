import Item from './Item/Item'
import classes from './FAQ.module.scss'

function FAQ(){
    return (
        <div className={classes.faq}>
            <h2 className={classes.faq__title}>FAQ</h2>
            <div className={classes.faq__box}>
                <Item />
                <Item />
                <Item />
                <Item />
                <Item />
                <Item />
                <Item />
                <Item />
                <Item />
                <Item />
                <Item />
                <Item />
                <Item />
                <Item />
                <Item />
            </div>
        </div>
    )
}

export default FAQ