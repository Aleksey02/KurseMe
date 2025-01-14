import Item from './Item/Item'
import classes from './FAQ.module.scss'
import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

function FAQ({data}){
    const link = useLocation().pathname === '/' ? "https://t.me/egeball20_bot" : "https://t.me/egeball20_bot?start=6186465800"

    useEffect(() => {
        const anchor = window.location.hash;
        if (anchor) {
            const element = document.querySelector(anchor);
            if (element) {
                const headerOffset = 104; 
                const elementPosition = element.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.screenY - headerOffset;
                
                window.scrollTo({
                top: offsetPosition,
                behavior: "smooth",
                });
            }
        }
    }, []);
    return (
        <div className={classes.faq} id="faq">
            <h2 className={classes.faq__title}>FAQ</h2>
            <div className={classes.faq__box}>
                {data.map((item, index)=><Item info={item} key={index}/>)}
            </div>
            <a href={link} target='_blank' className={classes.faq__link}>КУПИТЬ КУРСЫ</a>
        </div>
    )
}

export default FAQ