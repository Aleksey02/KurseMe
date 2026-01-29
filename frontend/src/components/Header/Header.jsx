import { useState } from 'react'
import logo from '../../assets/images/Header/logo.svg'
import profile from '../../assets/images/Header/profile.svg'
import adminImg from '../../assets/images/Header/sheriff.png'
import classes from './Header.module.scss'
import { NavLink } from 'react-router-dom';

function Header({isAuth}){
    const [isBurgerActive, setIsBurgerActive] = useState(false);
    const {pathname} = window.location;
    const location = pathname.includes('id') ? `/id${pathname.split('id')[1]}` : "";

    return (
        <header className={classes.header}>
            <div className={classes.header__box}>
                <NavLink to={location} className={classes.header__logo}>
                    <img src={logo} alt="logo" className={classes.header__logo}/>
                </NavLink>
                <ul className={classes.header__list}>
                    <li className={classes.header__item}>
                        <NavLink to={location + '/partnership'} className={classes.header__link}>Сотрудничество</NavLink>
                    </li>
                    <li className={classes.header__item}>
                        <NavLink to={location + '/slivy-kursov-ege'} className={classes.header__link}>Бесплатные Курсы</NavLink>
                    </li>
                </ul>
                <div>
                {isAuth.isAdmin && <NavLink className={classes.header__btn}  to={'admin'}>Админ панель</NavLink>}
                <NavLink className={classes.header__btn}  to={isAuth? 'account' : 'auth'}>{isAuth? 'Аккаунт' : 'Войти'}</NavLink>
                </div>
                <div className={classes.header__buttons}>
                    {isAuth.isAdmin && <NavLink className={classes.header__profile}  to={'admin'}>
                            <img src={adminImg} alt="admin pannel button" />
                        </NavLink>}
                    <NavLink  to={isAuth? 'account' : 'auth'} className={classes.header__profile}>
                        <img src={profile} className={classes.header__profile} alt="Аккаунт" />
                    </NavLink>
                    <button className={classes.burger + ' ' + (isBurgerActive ? classes.active : '')} onClick={()=>setIsBurgerActive(prev=>!prev)}>
                        <span className={classes.burger__line}></span>
                        <span className={classes.burger__line}></span>
                        <span className={classes.burger__line}></span>
                    </button>
                </div>
                <div className={classes.menu + ' ' + (isBurgerActive ? classes.active : '')}>
                    <NavLink to={location + '/partnership'} className={classes.menu__link}>Сотрудничество</NavLink>
                    <NavLink to={location + '/slivy-kursov-ege'} className={classes.menu__link}>Бесплатные Курсы</NavLink>
                </div>
            </div>
        </header>
    )
}

export default Header