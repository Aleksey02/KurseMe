import classes from './Item.module.scss'
import {NavLink} from "react-router-dom";
import umskul from '../../../../assets/images/School/umskul.svg'
import stobalniyrepetitor from '../../../../assets/images/School/stobalniyrepetitor.svg'
import vebium from '../../../../assets/images/School/vebium.svg'
import smartup from '../../../../assets/images/School/smartup.svg'
import egeland from '../../../../assets/images/School/egeland.svg'
import sotka from '../../../../assets/images/School/sotka.svg'


const img = {
    'umskul': umskul,
    'stobalniyrepetitor': stobalniyrepetitor,
    'vebium': vebium,
    'smartup': smartup,
    'egeland': egeland,
    'sotka': sotka
}

function Item({info}){
    console.log(info);
    
    return (
        <div className={classes.item}>
            <div className={classes.item__img}>
                <img src={img[info.name]} alt={`${info.title} logo`}  />
            </div> 
            <p className={classes.item__desc}><b>{info.title}</b> - ${info.desc}</p>
            <NavLink to={window.location.pathname + '/' + info.name} className={classes.item__btn}>Выбрать</NavLink>
        </div>
    )
}

export default Item