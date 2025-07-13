import {NavLink} from 'react-router-dom'
import classes from './Partnership.module.scss'
import PartnerLine from '../../components/PartnerLine/PartnerLine'
import img1 from '../../assets/images/Partnership/partnership_image_1.jpg'
import img2 from '../../assets/images/Partnership/partnership_image_2.png'
import img3 from '../../assets/images/Partnership/partnership_image_3.jpg'
import video1 from '../../assets/video/Partnership/video1.mp4'
import video2 from '../../assets/video/Partnership/video2.mp4'
import video3 from '../../assets/video/Partnership/video3.mp4'

const videosData = [
	{ src: video1, title: '1.4M просмотров. Платформа ТикТок. Популярный звук + скриншоты полезных PDF-материалов для математики.'},
	{ src: video2, title: '154К просмотров. Платформа ТикТок.  Популярный звук + мем на подходящую тематику.'},
	{ src: video3, title: '322К просмотров. Платформа ТикТок. Популярный звук + скриншоты полезных PDF-материалов для химии.'},
]

const openLines = [
	{
		title: 'Подробнее:',
		desc: 'Если Вы создадите короткий ролик для любой из следующих платформ: TikTok, Instagram Reels, YouTube Shorts или VK Clips на темы: школа, обучение, подготовка к экзаменам или схожие темы с упоминанием нашего проекта, то мы вам заплатим!'
	},
	{
		title: 'Условия для получения оплаты:',
		desc: `• Живые просмотры и никакой накрутки (проверяется модераторами);
<br /><br />
• Добавить в короткий ролик любое упоминание нашего проекта: название, логотип и т.п.;
<br /><br />
• Ваш короткий ролик должны быть на темы: школа, обучение, подготовка к экзаменам или схожие темы. Мы не принимаем не относящиеся к учебе тематики (моменты из фильмов, просто смешные видео и т.п).
<br /><br />
💡  <i>Вставляйте свою реферальную ссылку в описании ролика, комментариях или в профиле, чтобы получать дополнительные 25% с каждого пополнения привлеченного Вами пользователя (данное условие НЕ обязательно для получения выплаты за кол-во просмотров).<i>`
	},
	{
		title: 'Примеры роликов, которые проходят условия:',
		desc: <>
			<div className={classes.partnership__box}>
				{videosData.map((item, index)=><Item data={item} key={index} />)}
			</div>
			<p>Ничего сложного. Самые простые ролики набирают сотни тысяч просмотров. Вот несколько рекомендаций:
<br/><br />
• Публикуйте по-настоящему полезный или интересный контент;
<br /><br />
• Используйте популярную музыку на момент публикации ролика;
<br /><br />
• Используйте хештеги и активно отвечайте в комментариях;
<br /><br />
Еще больше рекомендаций, подробный мануал, а так же ответы на вопросы вы получите в чате после одобрения Вашей заявки.</p>
<br /><br />
		</>
	},
	{
		title: 'Сумма выплат и условия выплат:',
		desc: `• Если ролик набрал больше 30,000 просмотров, мы вам заплатим 5,000 рублей.
<br /><br />
• Если ролик набрал больше 50,000 просмотров, мы вам заплатим 7,000 рублей.
<br /><br />
• Если ролик набрал больше 100,000 просмотров, мы вам заплатим 10,000 рублей.
<br /><br />
• Если ваши ролики НЕ залетают, то мы заплатим вам за суммарное кол-во просмотров на вашем аккаунте. То есть за 10 роликов, которые набрали по 3,000 просмотров вы получите так же выплату в 5,000 рублей.<br /><br />`
	},
	{
		title: 'Как начать зарабатывать:',
		desc: `Для начала сотрудничества с нами, напишите техническому менеджеру: <a href="https://t.me/racketeersss">https://t.me/racketeersss</a><br /><br />`
	},
	{
		title: 'Подробнее:',
		desc: `Скопируйте свою реферальную ссылку во вкладке «Профиль» и делитесь ей как угодно — в соцсетях, беседах или лично. Каждый привлечённый пользователь в среднем тратит около 2,000 рублей в месяц, а вы зарабатываете 25% с его каждого пополнения — всё просто и выгодно!`
	},
	{
		title: 'Условия для получения оплаты:',
		desc: `1) Никаких ограничений — включайте креативность и продвигайте свою реферальную ссылку любыми способами! С каждого пополнения баланса рефералом Вы получаете 25% себе.`
	},
	{
		title: 'Идеи, как привлекать рефералов:',
		desc: `• Оставляйте свою реферальную ссылку в комментариях под тематическими видео-роликами: вебинары онлайн-школ, блоги про школу, короткие ролики в ТикТоке и подобных сервисах и т.д.;
<br/><br/>
• Отправляйте ссылку друзьям/знакомым в личные сообщения;
<br/><br/>
•  Отправляйте ссылку в тематические беседы/чаты: беседа класса, беседа онлайн-школы и т.д.;
<br/><br/>
• Если Вы имеете любой медийный ресурс (личный блок, ютуб-канал, телеграм-канал и т.д.), то можете закинуть свою реф. ссылку в них.
<br/><br/>
• Включайте креативность и задействовать свои авторские способы рекламирования реферальной ссылки!
<br/><br/>
💡<i>Во всех случаях не забывайте писать привлекающий текст на подобие: «Если хотите заниматься дешевле, то вот: *ваша реферальная ссылка*», «Сливы курсов ЕГЭ/ОГЭ можете купить здесь: *ваша реферальная ссылка*» и т.д. В ином случае никто не будет переходить по Вашей ссылке, если Вы скинете ее без каких-либо пояснений что это вообще за ссылка.</i><br/><br/>`
	},
	{
		title: 'Примеры рекламирования своей реферальной ссылки (просто для понимания, как это может выглядеть):',
		desc: `*тут каруселька с примерами пнг*`
	},
	{
		title: 'Сумма и условия выплат:',
		desc: `• За каждое пополнение своего реферала Вы будете получать 25% с его суммы пополнения;
<br/><br/>
• Сумма вывода на любую карту РФ или в монете USDT (сеть TRC) доступна от 5,000 рублей.
<br/><br/>
• Если Ваши рефералы принесли вам меньше 5,000 рублей, то вы можете потратить их на курсе в боте.<br/><br/>`
	},
	{
		title: 'Как начать зарабатывать:',
		desc: `Переходите в бота, жмите «Профиль» → «Реферальная Система», копируйте ссылку и начинайте ее распространять.`
	},
	{
		title: 'Подробнее:',
		desc: `Если Вас не привлекает денежное сотрудничество с нами, то можете отправить свою реферальную ссылку всего лишь узкому кругу людей (например беседа класса) для получения самых редких курсов ОГЭ/ЕГЭ. Всего за 3-5 приведенных рефералов Вы получите те курсы, которых нет где-либо еще. `
	},
	{
		title: 'Список Бесплатных Курсов:',
		desc: `Список постоянно обновляется.  Актуальный список доступен в нашем боте во вкладке «Профиль» → «Бесплатные Курсы».`
	},
	{
		title: 'Условия получения Бесплатных Курсов:',
		desc: `• Вам необходимо перейти в бота (вкладка «Профиль» → «Бесплатные Курсы») и первым делом выбрать желаемый курс;
<br/><br/>
• После выбора курса, копируйте ссылку, которая будет отображаться в сообщении.
<br/><br/>
• Перешлите ссылку друзьям. После того как Ваши друзья перейдут в бота, Вы получите выбранный курс в автоматическом режиме.
<br/><br/>
💡<i>Будьте внимательны при копировании своей ссылки. На каждый курс — уникальная ссылка.</i><br/><br/>`
	},
	{
		title: 'Как начать получать Бесплатные Курсы:',
		desc: `Переходите в бота, жмите «Профиль» → «Бесплатные Курс\ы», выбирайте нужный курс и начинайте распространять ссылку для получения курса.<br/><br/>
`
	},
]

function Item({data}) {
	return <div className={classes.item}>
		<video src={data.src} controls preload='metadata'></video>
		<div className={classes.item__info}>
			<p className={classes.item__howToLook}>{data.title}</p>
		</div>
	</div>
}


function Partnership() {
	const {pathname} = window.location;
	const refLink = pathname.includes('id') ? `?start=${pathname.split('id')[1].split('/')[0]}` : "";

	return <div className={classes.partnership}>
		<h2>Реферальная система | <NavLink to="/">egeball.com</NavLink></h2>
		<p>Наш проект является одним из первых в тематике сливов курсов ОГЭ/ЕГЭ. С 2020 года мы помогли 10,000+ выпускникам подготовиться к экзаменам почти за бесценок! Становясь нашим партнером, мы гарантируем качественный продукт, быстрые выплаты и повышение ставок.</p>
		<br />
		<br />
		<p>Мы предлагаем разные условия сотрудничества. Выбирай удобный и начинай зарабатывать уже сегодня!</p>
		<br />
		<br />
		<p className={classes.partnership__bold}>1) Создавай короткий видео-контент с упоминанием нашего проекта и получай фиксированную оплату за кол-во просмотров:</p>
		<br/><br />
		<img src={img1} alt="" />
		<div className={classes.partnership__open_line}>
			<PartnerLine title={openLines[0].title} desc={openLines[0].desc} />
		</div>
		<div className={classes.partnership__open_line}>
			<PartnerLine title={openLines[1].title} desc={openLines[1].desc} />
		</div>
		<div className={classes.partnership__open_line}>
			<PartnerLine title={openLines[2].title} desc={openLines[2].desc} isJsx/>
		</div>
		<div className={classes.partnership__open_line}>
			<PartnerLine title={openLines[3].title} desc={openLines[3].desc} />
		</div>
		<div className={classes.partnership__open_line}>
			<PartnerLine title={openLines[4].title} desc={openLines[4].desc} />
		</div>
		<br />
		<p className={classes.partnership__bold}>2) Рекламируй свою реферальную ссылку и получай до 25% с каждого пополнения. </p>
		<br/><br />
		<img src={img2} alt="" />
		<div className={classes.partnership__open_line}>
			<PartnerLine title={openLines[5].title} desc={openLines[5].desc} />
		</div>
		<div className={classes.partnership__open_line}>
			<PartnerLine title={openLines[6].title} desc={openLines[6].desc} />
		</div>
		<div className={classes.partnership__open_line}>
			<PartnerLine title={openLines[7].title} desc={openLines[7].desc} />
		</div>
		<div className={classes.partnership__open_line}>
			<PartnerLine title={openLines[8].title} desc={openLines[8].desc} />
		</div>
		<div className={classes.partnership__open_line}>
			<PartnerLine title={openLines[9].title} desc={openLines[9].desc} />
		</div>
		<div className={classes.partnership__open_line}>
			<PartnerLine title={openLines[10].title} desc={openLines[10].desc} />
		</div>
		<br />
		<p className={classes.partnership__bold}>3) Делись своей реферальной ссылкой с небольшим кругом людей и получай эксклюзивные курсы.</p>
		<br/><br />
		<img src={img3} alt="" />
		<div className={classes.partnership__open_line}>
			<PartnerLine title={openLines[11].title} desc={openLines[11].desc} />
		</div>
		<div className={classes.partnership__open_line}>
			<PartnerLine title={openLines[12].title} desc={openLines[12].desc} />
		</div>
		<div className={classes.partnership__open_line}>
			<PartnerLine title={openLines[13].title} desc={openLines[13].desc} />
		</div>
		<div className={classes.partnership__open_line}>
			<PartnerLine title={openLines[14].title} desc={openLines[14].desc} />
		</div>
		<a href={`https://t.me/egeball21_bot${refLink}`} target='_blank' className={classes.partnership__link}>КУПИТЬ КУРСЫ</a>
	</div>
}

export default Partnership;