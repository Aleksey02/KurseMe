function Player({isAuth}) {
	if(!isAuth) {
		return <div style={{
			display: 'flex',
			justifyContent: 'center'
		}}>Чтобы смотреть видео материалы нужно войти в аккаунт</div>
	}

	return (
		<div>
			<h1>Player</h1>
			<div style={{position: 'relative', paddingTop: '56.25%', width: '100%'}}>
				<iframe 
					src="https://kinescope.io/embed/2HFsUa9yj9mnLzhQUaTVYE?watermark=egeball.com" 
					allow="autoplay; fullscreen; picture-in-picture; encrypted-media; gyroscope; accelerometer; clipboard-write; screen-wake-lock;" 
					frameBorder="0" 
					allowFullScreen 
					style={{position: 'absolute', width:' 100%', height: '100%', top: '0', left: '0'}}>
				</iframe>
			</div>
		</div>
	);
}

export default Player;