import { useParams } from 'react-router-dom'
import Advantages from './Advantages/Advantages'
import CourseAdvertising from './CourseAdvertising/CourseAdvertising'
import FAQ from './FAQ/FAQ'
import classes from './Home.module.scss'
import HowToLook from './HowToLook/HowToLook'
import Item from './Item/Item'
import Reviews from './Reviews/Reviews'
import Universities from './Universities/Universities'

function Home({advantages, faq}){
    return (
        <div className={classes.home}>
            <CourseAdvertising/>
            <Advantages data={advantages} />
            <HowToLook />
            <Universities />
            <Reviews />
            {/* <div data-aos="zoom-in-up">
                <h3 className={classes.home__title}>Курсы 2024-2025 учебный год:</h3>
                <div className={classes.home__box}>
                    <Item numberClass={11} text={'ЕГЭ 11 класс'}/>
                    <Item numberClass={9} text={'ОГЭ 9 класс'}/>
                </div>
            </div> */}
            <FAQ data={faq}/>
        </div>
    )
}
export default Home