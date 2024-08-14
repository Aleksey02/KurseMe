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
                <a href='https://t.me/kursemesup' target='_blank' className={classes.footer__text}>Поддержка</a>
                <a href='https://t.me/+G2DF-9J14ikzMTJi' target='_blank' className={classes.footer__text}>Отзывы</a>
            </div>
            <div className={classes.footer__item}>
                <h4 className={classes.footer__title}>Связаться с нами</h4>
                <a href='https://t.me/+TibCIQYxcN1mMDFl' className={classes.footer__text}>Наш Telegram канал</a>
                <a href='https://t.me/kursemesup' className={classes.footer__text}>Менеджер</a>
            </div>
        </footer>
    )
}
export default Footer