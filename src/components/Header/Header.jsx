import { useState } from 'react'
import logo from '../../assets/images/Header/logo.svg'
import classes from './Header.module.scss'
import { NavLink, useLocation } from 'react-router-dom';

function Header(){
    const [isBurgerActive, setIsBurgerActive] = useState(false);
    const location = useLocation().pathname.includes('ref') ? '/ref/' : '/';

    return (
        <header className={classes.header}>
            <div className={classes.header__box}>
                <NavLink to={location} className={classes.header__logo}>
                    <img src={logo} alt="logo" className={classes.header__logo}/>
                </NavLink>
                <ul className={classes.header__list}>
                    <li className={classes.header__item}>
                        <NavLink to={location + '11'} className={classes.header__link}>ЕГЭ</NavLink>
                    </li>
                    <li className={classes.header__item}>
                        <NavLink to={location + '9'} className={classes.header__link}>ОГЭ</NavLink>
                    </li>
                    <li className={classes.header__item}>
                        <a className={classes.header__link} href='https://telegra.ph/Besplatnye-kursy-01-14' target='_blank'>Бесплатные Курсы</a>
                    </li>
                </ul>
                <a className={classes.header__btn} href='https://telegra.ph/Besplatnye-kursy-01-14' target='_blank'>Форум</a>
                <button className={classes.burger + ' ' + (isBurgerActive ? classes.active : '')} onClick={()=>setIsBurgerActive(prev=>!prev)}>
                    <span className={classes.burger__line}></span>
                    <span className={classes.burger__line}></span>
                    <span className={classes.burger__line}></span>
                </button>
                <div className={classes.menu + ' ' + (isBurgerActive ? classes.active : '')}>
                    <NavLink to={location + '11'} className={classes.menu__link}>ЕГЭ</NavLink>
                    <NavLink to={location + '9'} className={classes.menu__link}>ОГЭ</NavLink>
                    <a className={classes.menu__link} href='https://telegra.ph/Besplatnye-kursy-01-14' target='_blank'>Бесплатные Курсы</a>
                </div>
            </div>
        </header>
    )
}

export default Header