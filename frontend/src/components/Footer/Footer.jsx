import classes from './Footer.module.scss'
import logo from '../../assets/images/Footer/logo.svg'
import { NavLink, useLocation } from 'react-router-dom'
import { observer } from 'mobx-react-lite';
import channelLinkStore from '../../store/channelLinkStore';

const Footer = observer(() => {
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
                <h3 className={classes.footer__title}>О нас</h3>
                <a href='https://t.me/egeball_forum' target='_blank' className={classes.footer__text}>Поддержка</a>
                <a href='https://t.me/egeball_feed' target='_blank' className={classes.footer__text}>Отзывы</a>
            </div>
            <div className={classes.footer__item}>
                <h3 className={classes.footer__title}>Мы в телеграме</h3>
                <a href={channelLinkStore.link} className={classes.footer__text} target='_blank'>Наш Telegram канал</a>
                <a href='https://t.me/+R3o7lVXE2YcwZjli' className={classes.footer__text} target='_blank'>Наш Telegram чат</a>
            </div>
        </footer>
    )
});

export default Footer;