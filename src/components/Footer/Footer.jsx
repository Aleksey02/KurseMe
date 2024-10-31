import classes from './Footer.module.scss'
import logo from '../../assets/images/Footer/logo.svg'
import { NavLink } from 'react-router-dom'

function Footer(){
    return (
        <footer className={classes.footer}>
            <div className={classes.footer__item}>
                <a href="">
                    <img src={logo} alt="logo" className={classes.footer__logo} />
                </a>
                <p className={classes.footer__text}>Общеобразовательный проект для подготовки к ЕГЭ и ОГЭ</p>
            </div>
            <div className={classes.footer__item}>
                <h4 className={classes.footer__title}>Обучение</h4>
                <NavLink to={"/11"} className={classes.footer__text}>ЕГЭ</NavLink>
                <NavLink to={"/9"} className={classes.footer__text}>ОГЭ</NavLink>
            </div>
            <div className={classes.footer__item}>
                <h4 className={classes.footer__title}>О нас</h4>
                <a href='https://t.me/egeball_support_bot' target='_blank' className={classes.footer__text}>Поддержка</a>
                <a href='https://t.me/+yTrsG96XZ4szMjY6' target='_blank' className={classes.footer__text}>Отзывы</a>
            </div>
            <div className={classes.footer__item}>
                <h4 className={classes.footer__title}>Мы в телеграме</h4>
                <a href='https://t.me/+jQiub1HPNzU4Mzhi' className={classes.footer__text} target='_blank'>Наш Telegram канал</a>
                <a href='https://t.me/+R3o7lVXE2YcwZjli' className={classes.footer__text} target='_blank'>Наш Telegram чат</a>
            </div>
        </footer>
    )
}
export default Footer