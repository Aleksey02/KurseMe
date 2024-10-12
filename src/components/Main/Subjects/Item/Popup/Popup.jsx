import classes from './Popup.module.scss'

function Popup({setIsPopupOpen}){
    return (
        <div className={classes.popup}>
            <div className={classes.popup__box}>
                <p className={classes.popup__text}>Перейти к оплате через Telegram-бота?</p>
                <div className={classes.popup__btns}>
                    <button className={classes.popup__btn} onClick={() => setIsPopupOpen(false)}>Отмена</button>
                    <a href='https://t.me/egeball13_bot' target='_blank' className={classes.popup__btn} onClick={() => setIsPopupOpen(false)}>Перейти</a>
                </div>
            </div>
        </div>
    )
}

export default Popup