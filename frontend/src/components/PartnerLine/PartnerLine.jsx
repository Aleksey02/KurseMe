import React, { useState } from 'react';

function PartnerLine({title, desc}) {
	const [isOpen, setIsOpen] = useState(false);
	return <>
		<h3 onClick={() => setIsOpen(!isOpen)}>{title}</h3>
		<br />
		{isOpen && <p>{desc}</p>}
	</>
}
export default PartnerLine;