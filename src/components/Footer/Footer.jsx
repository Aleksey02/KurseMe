import classes from './Footer.module.scss'
import logo from '../../assets/images/Footer/logo.svg'

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
                <a className={classes.footer__text}>ЕГЭ</a>
                <a className={classes.footer__text}>ОГЭ</a>
            </div>
            <div className={classes.footer__item}>
                <h4 className={classes.footer__title}>О нас</h4>
                <a className={classes.footer__text}>Поддержка</a>
                <a className={classes.footer__text}>Отзывы</a>
            </div>
            <div className={classes.footer__item}>
                <h4 className={classes.footer__title}>Связаться с нами</h4>
                <a className={classes.footer__text}>Наш Telegram канал</a>
                <a className={classes.footer__text}>Менеджер</a>
            </div>
        </footer>
    )
}
export default Footer