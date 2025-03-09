<<<<<<< HEAD
import Advantages from './Advantages/Advantages'
import CourseAdvertising from './CourseAdvertising/CourseAdvertising'
import FAQ from './FAQ/FAQ'
import classes from './Home.module.scss'
import Item from './Item/Item'
import Reviews from './Reviews/Reviews'
import Universities from './Universities/Universities'

function Home({advantages, faq}){
    return (
        <div className={classes.home}>
            <CourseAdvertising/>
            <div data-aos="zoom-in-up">
                <h3 className={classes.home__title}>Курсы 2024-2025 учебный год:</h3>
                <div className={classes.home__box}>
                    <Item numberClass={11} text={'ЕГЭ 11 класс'}/>
                    <Item numberClass={9} text={'ОГЭ 9 класс'}/>
                </div>
            </div>
            <Universities />
            <Reviews />
            <Advantages data={advantages} />
            <FAQ data={faq}/>
        </div>
    )
}
=======
import Advantages from './Advantages/Advantages'
import CourseAdvertising from './CourseAdvertising/CourseAdvertising'
import FAQ from './FAQ/FAQ'
import classes from './Home.module.scss'
import Item from './Item/Item'

function Home({advantages, faq}){
    return (
        <div className={classes.home}>
            <CourseAdvertising/>
            <h3 className={classes.home__title}>Курсы 2024-2025 учебный год</h3>
            <div className={classes.home__box}>
                <Item numberClass={11} text={'ЕГЭ 11 класс'}/>
                <Item numberClass={9} text={'ОГЭ 9 класс'}/>
            </div>
            <Advantages data={advantages} />
            <FAQ data={faq}/>
        </div>
    )
}
>>>>>>> e7598d7 (Удалил подмодуль backend)
export default Home