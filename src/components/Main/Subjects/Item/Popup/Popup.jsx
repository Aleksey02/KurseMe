import classes from './Popup.module.scss'
import { useLocation } from 'react-router-dom'

function Popup({setIsPopupOpen}){
    const link = useLocation().pathname.includes('ref') ? "https://t.me/egeball15_bot?start=6186465800" : "https://t.me/egeball15_bot";
    
    return (
        <div className={classes.popup}>
            <div className={classes.popup__box}>
                <p className={classes.popup__text}>Перейти к оплате через Telegram-бота?</p>
                <div className={classes.popup__btns}>
                    <button className={classes.popup__btn} onClick={() => setIsPopupOpen(false)}>Отмена</button>
                    <a href={link} target='_blank' className={classes.popup__btn} onClick={() => setIsPopupOpen(false)}>Перейти</a>
                </div>
            </div>
        </div>
    )
}

export default Popup