import Item from './Item/Item'
import classes from './FAQ.module.scss'
import { useEffect } from 'react'
import { observer } from 'mobx-react-lite';
import botLinkStore from '../../store/botLink';

const FAQ = observer(({data}) => {
    const {pathname} = window.location;
    const refLink = pathname.includes('id') ? `?start=${pathname.split('id')[1]}` : "";
    const link = `https://t.me/${botLinkStore.link}${refLink}`

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
            <a href={link} target='_blank' className={classes.faq__link}>КУПИТЬ КУРСЫ</a>
        </div>
    )
})

export default FAQ;