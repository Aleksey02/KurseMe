import Item from './Item/Item'
import classes from './FAQ.module.scss'
import { useEffect } from 'react'

function FAQ({data}){
    const {pathname} = window.location;
    const refLink = pathname.includes('id') ? `?start=${pathname.split('id')[1]}` : "";

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
        <div className={classes.faq} id="faq" data-aos="zoom-in-up">
            <h2 className={classes.faq__title}>FAQ:</h2>
            <div className={classes.faq__box}>
                {data.map((item, index)=><Item info={item} key={index}/>)}
            </div>
            <a href={`https://t.me/egeball21_bot${refLink}`} target='_blank' className={classes.faq__link}>КУПИТЬ КУРСЫ</a>
        </div>
    )
}

export default FAQ