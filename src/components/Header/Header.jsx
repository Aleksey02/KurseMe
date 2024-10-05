import { useState } from 'react'
import logo from '../../assets/images/Header/logo.svg'
import classes from './Header.module.scss'
import { NavLink } from 'react-router-dom';

function Header(){
    const [isBurgerActive, setIsBurgerActive] = useState(false);
    return (
        <header className={classes.header}>
            <div className={classes.header__box}>
                <NavLink to="/" className={classes.header__logo}>
                    <img src={logo} alt="logo" className={classes.header__logo}/>
                </NavLink>
                <ul className={classes.header__list}>
                    <li className={classes.header__item}>
                        <NavLink to="/11" className={classes.header__link}>ЕГЭ</NavLink>
                    </li>
                    <li className={classes.header__item}>
                        <NavLink to="/9" className={classes.header__link}>ОГЭ</NavLink>
                    </li>
                    <li className={classes.header__item}>
                        <a className={classes.header__link} href='https://egeball.space/'>Бесплатные Курсы</a>
                    </li>
                </ul>
                <a className={classes.header__btn} href='https://egeball.space/'>Форум</a>
                <button className={classes.burger + ' ' + (isBurgerActive ? classes.active : '')} onClick={()=>setIsBurgerActive(prev=>!prev)}>
                    <span className={classes.burger__line}></span>
                    <span className={classes.burger__line}></span>
                    <span className={classes.burger__line}></span>
                </button>
                <div className={classes.menu + ' ' + (isBurgerActive ? classes.active : '')}>
                    <NavLink to="/11" className={classes.menu__link}>ЕГЭ</NavLink>
                    <NavLink to="/9" className={classes.menu__link}>ОГЭ</NavLink>
                    <NavLink to="/" className={classes.menu__link}>Бесплатные Курсы</NavLink>
                </div>
            </div>
        </header>
    )
}

export default Header