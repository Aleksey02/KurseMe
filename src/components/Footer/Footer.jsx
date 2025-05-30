import classes from './Footer.module.scss'
import logo from '../../assets/images/Footer/logo.svg'
import { NavLink, useLocation } from 'react-router-dom'

function Footer(){
    const location = useLocation().pathname.includes('ref') ? '/ref/' : '/';

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
                <NavLink to={location + '11'} className={classes.footer__text}>ЕГЭ</NavLink>
                <NavLink to={location + '9'} className={classes.footer__text}>ОГЭ</NavLink>
            </div>
            <div className={classes.footer__item}>
                <h4 className={classes.footer__title}>О нас</h4>
                <a href='https://t.me/racketeersss' target='_blank' className={classes.footer__text}>Поддержка</a>
                <a href='https://t.me/egeball_feed' target='_blank' className={classes.footer__text}>Отзывы</a>
            </div>
            <div className={classes.footer__item}>
                <h4 className={classes.footer__title}>Мы в телеграме</h4>
                <a href='https://t.me/+E6coA8QsBGgzYTM6' className={classes.footer__text} target='_blank'>Наш Telegram канал</a>
                <a href='https://t.me/+R3o7lVXE2YcwZjli' className={classes.footer__text} target='_blank'>Наш Telegram чат</a>
            </div>
        </footer>
    )
}
export default Footer