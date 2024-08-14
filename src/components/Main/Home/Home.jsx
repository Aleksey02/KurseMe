import Advantages from './Advantages/Advantages'
import FAQ from './FAQ/FAQ'
import classes from './Home.module.scss'
import Item from './Item/Item'

function Home({data}){
    return (
        <div className={classes.home}>
            <h3 className={classes.home__title}>Направления подготовки</h3>
            <div className={classes.home__box}>
                <Item numberClass={11} text={'ЕГЭ 11 класс'}/>
                <Item numberClass={9} text={'ОГЭ 9 класс'}/>
            </div>
            <Advantages data={data} />
            <FAQ />
        </div>
    )
}
export default Home