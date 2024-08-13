import classes from './Item.module.scss'
import Popup from './Popup/Popup'
import { useState } from 'react'

function Item({curse}){
    console.log(curse);
    
    const [isPopupOpen, setIsPopupOpen] = useState(false);
    return (
        <div className={classes.item}>
            <div className={classes.item__box}>
                <h3 className={classes.item__title}>{curse.title}</h3>
                    <div className={classes.item__tags}>
                        {curse
                        .tags
                        .map(tag=><div className={classes.item__tag}>
                                    {tag}
                                </div>)}
                        
                    </div>
                    <div className={classes.item__info}>
                        <div className={classes.item__detail}>
                            <h5 className={classes.item__subtitle}>Старт</h5>
                            <p className={classes.item__text}>{curse.start}</p>
                        </div>
                        <div className={classes.item__detail}>
                            <h5 className={classes.item__subtitle}>Кол-во уроков</h5>
                            <p className={classes.item__text}>{curse.countLesson}</p>
                        </div>
                        <div className={classes.item__detail}>
                            <h5 className={classes.item__subtitle}>Длительность</h5>
                            <p className={classes.item__text}>{curse.duration}</p>
                        </div>
                        <div className={classes.item__detail}>
                            <h5 className={classes.item__subtitle}>Расписание</h5>
                            <a href={curse.linkFile} target='_blank' className={classes.item__dowload + ' ' + classes.item__text}>Скачать</a>
                        </div>
                    </div>
            </div>
            <div className={classes.item__cost}>
                <p className={classes.item__price}><span>Цена:</span> {curse.cost}₽/мес</p>
                <button className={classes.item__btn} onClick={()=> setIsPopupOpen(true)}>Купить</button>
            </div>
            {isPopupOpen && <Popup setIsPopupOpen={setIsPopupOpen}/>}
        </div>
    )
}

export default Item