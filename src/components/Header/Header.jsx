import { useState } from 'react'
import logo from '../../assets/images/Header/logo.svg'
import profile from '../../assets/images/Header/profile.svg'
import adminImg from '../../assets/images/Header/sheriff.png'
import classes from './Header.module.scss'
import { NavLink, useLocation } from 'react-router-dom';

function Header({isAuth}){
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
                        <NavLink to={location + '11'} className={classes.header__link}>Сотрудничество</NavLink>
                    </li>
                    {/* <li className={classes.header__item}>
                        <NavLink to={location + '9'} className={classes.header__link}>ОГЭ</NavLink>
                    </li> */}
                    <li className={classes.header__item}>
                        <a className={classes.header__link} href='https://telegra.ph/Besplatnye-kursy-01-14' target='_blank'>Бесплатные Курсы</a>
                    </li>
                </ul>
                {/* <a className={classes.header__btn} href='https://telegra.ph/Besplatnye-kursy-01-14' target='_blank'>Форум</a> */}
                <div>
                {isAuth.isAdmin && <NavLink className={classes.header__btn}  to={'admin'}>Админ панель</NavLink>}
                <NavLink className={classes.header__btn}  to={isAuth? 'account' : 'auth'}>{isAuth? 'Аккаунт' : 'Войти'}</NavLink>
                </div>
                <div className={classes.header__buttons}>
                    {isAuth.isAdmin && <NavLink className={classes.header__profile}  to={'admin'}>
                            <img src={adminImg} alt="" />
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
                    <NavLink to={location + '11'} className={classes.menu__link}>Сотрудничество</NavLink>
                    {/* <NavLink to={location + '9'} className={classes.menu__link}>ОГЭ</NavLink> */}
                    <a className={classes.menu__link} href='https://telegra.ph/Besplatnye-kursy-01-14' target='_blank'>Бесплатные Курсы</a>
                </div>
            </div>
        </header>
    )
}

export default Header