import classes from './Popup.module.scss'

function Popup({setIsPopupOpen}){
    const {pathname} = window.location;
    const refLink = pathname.includes('id') ? `?start=${pathname.split('id')[1]}` : "";

    return (
        <div className={classes.popup}>
            <div className={classes.popup__box}>
                <p className={classes.popup__text}>Перейти к оплате через Telegram-бота?</p>
                <div className={classes.popup__btns}>
                    <button className={classes.popup__btn} onClick={() => setIsPopupOpen(false)}>Отмена</button>
                    <a href={`https://t.me/egeball21_bot${refLink}`} target='_blank' className={classes.popup__btn} onClick={() => setIsPopupOpen(false)}>Перейти</a>
                </div>
            </div>
        </div>
    )
}

export default Popup