import { useState } from 'react';
import classes from './PartnerLine.module.scss'
import arrow from '../../assets/images/Partnership/arrow.png'

function PartnerLine({title, desc, isJsx}) {
	const [isOpen, setIsOpen] = useState(false);
	return <>
		<div className={classes.open_line_top}>
			<h4>{title}</h4>
			<button onClick={() => setIsOpen(!isOpen)} className={isOpen ? classes.button_active : ''}>
				<img src={arrow} alt="arrow image" />
			</button>
		</div>
		<br />
		{isJsx 
		? <div className={isOpen ? classes.open_line_desc : classes.open_line_desc_hide}>{desc}</div>
		: <p className={isOpen ? classes.open_line_desc : classes.open_line_desc_hide} dangerouslySetInnerHTML={{__html: desc}} />}
	</>
}
export default PartnerLine;