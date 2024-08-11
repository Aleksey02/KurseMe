import logo from '../../assets/images/Header/logo.svg'
import classes from './Header.module.scss'

function Header(){
    return (
        <header className={classes.header}>
            <a href="/" className={classes.header__logo}>
                <img src={logo} alt="logo" />
            </a>
            <ul className={classes.header__list}>
                <li className={classes.header__item}>
                    <a href="/" className={classes.header__link}>ЕГЭ</a>
                </li>
                <li className={classes.header__item}>
                    <a href="/" className={classes.header__link}>ОГЭ</a>
                </li>
                <li className={classes.header__item}>
                    <a href="/" className={classes.header__link}>Помощь</a>
                </li>
            </ul>
            <button className={classes.header__btn}>Войти</button>
        </header>
    )
}

export default Header