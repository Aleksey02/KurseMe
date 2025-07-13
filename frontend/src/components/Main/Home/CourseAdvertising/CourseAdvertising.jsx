import classes from './CourseAdvertising.module.scss'
import advertImg from '../../../../assets/images/Home/CourseAdvertising/advert_image.png'

function CourseAdvertising() {
	const {pathname} = window.location;
	const refLink = pathname.includes('id') ? `?start=${pathname.split('id')[1]}` : "";

	return <div className={classes.courseAdvertising} data-aos="zoom-in-up">
		<div className={classes.courseAdvertising__box}>
			<div className={classes.courseAdvertising__info}>
				<p className={classes.courseAdvertising__label}>egeball21_bot</p>
				<h2 className={classes.courseAdvertising__title}>Сливы курсов ЕГЭ и ОГЭ в 10 раз дешевле.</h2>
				<p className={classes.courseAdvertising__desc}>С 2020 года мы помогли 10,000+ выпускникам подготовиться к экзаменам почти за бесценок! Присоединяйся к нашей пиратской семье и занимайся по лучшим курсам за копейки. ❤️</p>
				<div className={classes.courseAdvertising__image}>
					<img src={advertImg} alt="Сливы курсов ЕГЭ и ОГЭ в 10 раз дешевле." />
				</div>
				<a href={`https://t.me/egeball21_bot${refLink}`} target='_blank' className={classes.courseAdvertising__btn}>Купить Курсы</a>
			</div>
		</div>
	</div>
}

export default CourseAdvertising