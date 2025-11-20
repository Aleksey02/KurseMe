import classes from './HowToLook.module.scss'
import video1 from '../../../../assets/video/HowToLook/video1.mp4'
import video2 from '../../../../assets/video/HowToLook/video2.mp4'
import video4 from '../../../../assets/video/HowToLook/video4.mp4'
import video5 from '../../../../assets/video/HowToLook/video5.mp4'

const data = [
	{ src: video1, title: 'Как выглядит слив курса ФЛЕШ👆🏻', join: 'Вступить в курс:', joinStatus: '⚡️'},
	{ src: video2, title: 'Как выглядит слив курса КОРРИДА👆🏻', join: 'Вступить в курс:', joinStatus: '⚡️'},
	{ src: video4, title: 'Как выглядят каналы с курса «Предбанник» от Умскул👆', join: 'Вступить в курсы:'},
	{ src: video5, title: 'Как выглядят каналы с курса «Мясорубка» от 100балльного👆', join: 'Вступить в курсы:'},
]

function Item({data}) {
	const {pathname} = window.location;
	const refLink = pathname.includes('id') ? `?start=${pathname.split('id')[1]}` : "";

	return <div className={classes.item}>
		<video src={data.src} controls preload='metadata'></video>
		<div className={classes.item__info}>
			<p className={classes.item__howToLook}>{data.title}</p>
			<p className={classes.item__join}>{data.join} <a href={`http://t.me/egeball22_bot${refLink}`}>@egeball22_bot</a>{data.joinStatus}</p>
		</div>
	</div>
}

function HowToLook() {
	return <div className={classes.howToLook} data-aos="zoom-in-up">
		<h2 className={classes.howToLook__title}>Как выглядят сливы курсов ЕГЭ/ОГЭ:</h2>
		<div className={classes.howToLook__box}>
			{data.map((item, index)=><Item data={item} key={index} />)}
		</div>
	</div>
}

export default HowToLook;