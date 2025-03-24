import classes from './Item.module.scss'
import russianLang from '../../../../assets/images/Subjects/russianLang.svg'
import mathProfile from '../../../../assets/images/Subjects/mathProfile.svg'
import mathBase from '../../../../assets/images/Subjects/mathBase.svg'
import physics from '../../../../assets/images/Subjects/physics.svg'
import socialScience from '../../../../assets/images/Subjects/socialScience.svg'
import history from '../../../../assets/images/Subjects/history.svg'
import literature from '../../../../assets/images/Subjects/literature.svg'
import englishLang from '../../../../assets/images/Subjects/englishLang.svg'
import biology from '../../../../assets/images/Subjects/biology.svg'
import chemistry from '../../../../assets/images/Subjects/chemistry.svg'
import informatics from '../../../../assets/images/Subjects/informatics.svg'
import math from '../../../../assets/images/Subjects/math.svg'
import Popup from './Popup/Popup'
import { useState } from 'react'

const img = {
    russianLang, 
    mathProfile,
    mathBase,
    physics,
    socialScience,
    history,
    literature,
    englishLang,
    biology,
    chemistry,
    informatics,
    math
}


function Item({info}){
    const [isPopupOpen, setIsPopupOpen] = useState(false);
    const imageUrl = info.imageUrl ? `http://localhost:3000/${info.imageUrl}` : img[info.name];
    const cost = info.imageUrl ? info.cost : '400';
    return(
        <div className={classes.item}>
            <div className={classes.item__wrapper}>
                <img src={imageUrl} alt="" />
                <div className={classes.item__box}>
                    {/* <p className={classes.item__kurs}>{info.countCusr}</p> */}
                    <p className={classes.item__cost}>от {cost}₽/мес</p>
                </div>
                <button className={classes.item__btn} onClick={()=>setIsPopupOpen(true)}>Выбрать</button>
            </div>
            {isPopupOpen && <Popup setIsPopupOpen={setIsPopupOpen}/>}
        </div>
    )
}
export default Item