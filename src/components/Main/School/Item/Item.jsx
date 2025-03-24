import classes from './Item.module.scss'
import {NavLink} from "react-router-dom";
import umskul from '../../../../assets/images/School/umskul.svg'
import stobalniyrepetitor from '../../../../assets/images/School/stobalniyrepetitor.svg'
import vebium from '../../../../assets/images/School/vebium.svg'
import smartup from '../../../../assets/images/School/smartup.svg'
import egeland from '../../../../assets/images/School/egeland.svg'
import sotka from '../../../../assets/images/School/sotka.svg'
import shkolkovo from '../../../../assets/images/School/shkolkovo.png'


const img = {
    'umskul': umskul,
    'stobalniyrepetitor': stobalniyrepetitor,
    'vebium': vebium,
    'smartup': smartup,
    'egeland': egeland,
    'sotka': sotka,
    'shkolkovo': shkolkovo
}

function Item({info}){
    const imageUrl = info.imageUrl ? `https://egeball.com/${info.imageUrl}` : img[info.name];
    const title = info.imageUrl ? info.name : info.title;
    const description = info.imageUrl ? info.description : info.desc;
    const link = info.imageUrl ? info.id : info.name;
    return (
        <div className={classes.item}>
            <div className={classes.item__img}>
                <img src={imageUrl} alt={`${title} logo`}  />
            </div> 
            <p className={classes.item__desc}><b>{title}</b> - {description}</p>
            <NavLink to={window.location.pathname + '/' + link} className={classes.item__btn}>Выбрать</NavLink>
        </div>
    )
}

export default Item