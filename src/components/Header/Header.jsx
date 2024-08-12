import { useState } from 'react'
import logo from '../../assets/images/Header/logo.svg'
import miniLogo from '../../assets/images/Header/mini_logo.svg'
import classes from './Header.module.scss'

function Header(){
    const [isBurgerActive, setIsBurgerActive] = useState(false);
    return (
        <header className={classes.header}>
            <a href="/" className={classes.header__logo}>
                <img src={logo} alt="logo" className={classes.header__logo + ' ' + classes.header__logo_long}/>
                <img src={miniLogo} alt="logo" className={classes.header__logo + ' ' + classes.header__logo_mini}/>
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
            <button className={classes.burger + ' ' + (isBurgerActive ? classes.active : '')} onClick={()=>setIsBurgerActive(prev=>!prev)}>
                <span className={classes.burger__line}></span>
                <span className={classes.burger__line}></span>
                <span className={classes.burger__line}></span>
            </button>
            <div className={classes.menu + ' ' + (isBurgerActive ? classes.active : '')}>
                <a href="/" className={classes.menu__link}>ЕГЭ</a>
                <a href="/" className={classes.menu__link}>ОГЭ</a>
                <a href="/" className={classes.menu__link}>Помощь</a>
            </div>
        </header>
    )
}

export default Header