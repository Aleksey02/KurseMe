import classes from './PageNotFound.module.scss'
import logo from '/mini_logo.ico'
import { NavLink } from 'react-router-dom'

function PageNotFound() {
	return (
		<div className={classes.pageNotFound}>
			<div className={classes.pageNotFound__wrapper}>
				<h1 className={classes.pageNotFound__title}>404</h1>
				<div className={classes.pageNotFound__content}>
					<span className={classes.pageNotFound__subtitle}>Страница не найдена</span>
					<img src={logo} alt="Логотип" />
				</div>
				<NavLink to="/" className={classes.pageNotFound__btn}>На главную</NavLink>
			</div>
		</div>
	);
}

export default PageNotFound;