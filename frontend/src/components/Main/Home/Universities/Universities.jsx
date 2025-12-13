import classes from './Universities.module.scss'
import universe1 from '../../../../assets/images/Home/Universities/universe_1.png'
import universe2 from '../../../../assets/images/Home/Universities/universe_2.png'
import universe3 from '../../../../assets/images/Home/Universities/universe_3.png'
import universe4 from '../../../../assets/images/Home/Universities/universe_4.png'
import universe5 from '../../../../assets/images/Home/Universities/universe_5.png'
import universe6 from '../../../../assets/images/Home/Universities/universe_6.png'

function Universities() {
	return <div className={classes.universities} data-aos="zoom-in-up">
		<h2 className={classes.universities__title}>Наши клиенты учатся в этих вузах:</h2>
		<div className={classes.universities__box}>
				<img className={classes.universities__img} src={universe1} alt="universe 1" />
				<img className={classes.universities__img} src={universe2} alt="universe 2" />
				<img className={classes.universities__img} src={universe3} alt="universe 3" />
				<img className={classes.universities__img} src={universe4} alt="universe 4" />
				<img className={classes.universities__img} src={universe5} alt="universe 5" />
				<img className={classes.universities__img} src={universe6} alt="universe 6" />
		</div>
	</div>
}

export default Universities;