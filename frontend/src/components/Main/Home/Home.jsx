import Advantages from './Advantages/Advantages'
import CourseAdvertising from './CourseAdvertising/CourseAdvertising'
import FAQ from './FAQ/FAQ'
import classes from './Home.module.scss'
import { lazy, Suspense } from 'react'
import { useInView } from '../../../hooks/useInView'

const HowToLook = lazy(() => import('./HowToLook/HowToLook'))
const Universities = lazy(() => import('./Universities/Universities'))
const Reviews = lazy(() => import('./Reviews/Reviews'))

function Home(){
    const { ref, isVisible } = useInView()
    return (
        <div className={classes.home}>
            <CourseAdvertising/>
            <Advantages />
            <div ref={ref}>
                {isVisible && (
                <Suspense fallback={<div>Загружается...</div>}>
                    <HowToLook />
                    <Universities />
                    <Reviews />
                </Suspense>
                )}
            </div>
            <FAQ />
        </div>
    )
}
export default Home