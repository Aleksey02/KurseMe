import classes from './Reviews.module.scss'
import review1 from '../../../../assets/images/Home/Reviews/reviews1.png';
import review2 from '../../../../assets/images/Home/Reviews/reviews2.png';
import review3 from '../../../../assets/images/Home/Reviews/reviews3.png';
import review4 from '../../../../assets/images/Home/Reviews/reviews4.png';
import review5 from '../../../../assets/images/Home/Reviews/reviews5.png';
import review6 from '../../../../assets/images/Home/Reviews/reviews6.png';

function Reviews() {
	return <div className={classes.reviews} data-aos="zoom-in-up">
		<h2 className={classes.reviews__title}>Отзывы:</h2>
		<div className={classes.reviews__box}>
			<img className={classes.reviews__img} src={review1} alt="review image 1"/>
			<img className={classes.reviews__img} src={review2} alt="review image 2"/>
			<img className={classes.reviews__img} src={review3} alt="review image 3"/>
			<img className={classes.reviews__img} src={review4} alt="review image 4"/>
			<img className={classes.reviews__img} src={review5} alt="review image 5"/>
			<img className={classes.reviews__img} src={review6} alt="review image 6"/>
		</div>
		<p className={classes.reviews__aboutus}>
			Ещё больше отзывов доступно во вкладке «О нас» в боте.
		</p>
	</div>
}

export default Reviews;