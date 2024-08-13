import classes from './Item.module.scss'

function Item(){
    return (
        <div className={classes.item}>
            <div className={classes.item__box}>
                <h3 className={classes.item__title}>Основной курс подготовки по русскому языку с Александром Долгих</h3>
                    <div className={classes.item__tags}>
                        <div className={classes.item__tag}>
                            ЕГЭ
                        </div>
                        <div className={classes.item__tag}>
                            Русский язык
                        </div>
                        <div className={classes.item__tag}>
                            Основной
                        </div>
                        <div className={classes.item__tag}>
                            Сентябрь
                        </div>
                    </div>
                    <div className={classes.item__info}>
                        <div className={classes.item__detail}>
                            <h5 className={classes.item__subtitle}>Старт</h5>
                            <p className={classes.item__text}>7 Сентября</p>
                        </div>
                        <div className={classes.item__detail}>
                            <h5 className={classes.item__subtitle}>Кол-во уроков</h5>
                            <p className={classes.item__text}>10</p>
                        </div>
                        <div className={classes.item__detail}>
                            <h5 className={classes.item__subtitle}>Длительность</h5>
                            <p className={classes.item__text}>1 Месяц</p>
                        </div>
                        <div className={classes.item__detail}>
                            <h5 className={classes.item__subtitle}>Расписание</h5>
                            <a href='https://clck.ru/3CLcfH' className={classes.item__dowload + ' ' + classes.item__text}>Скачать</a>
                        </div>
                    </div>
            </div>
            <div className={classes.item__cost}>
                <p className={classes.item__price}><span>Цена:</span> 349₽/мес</p>
                <button className={classes.item__btn}>Купить</button>
            </div>
        </div>
    )
}

export default Item