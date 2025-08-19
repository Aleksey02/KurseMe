import React, { useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';

const SetCookie = () => {
	const [searchParams] = useSearchParams();
	const next = searchParams.get('next') || '/';

	useEffect(() => {
		// Пример установки куки (если нужно)
		//document.cookie = "session_id=your-session-id; path=/; Secure; SameSite=Lax";

		// Редирект
		window.location.replace(next);
		console.log('redirected');
		
	}, [next]);

	return (
		<div>
			Redirecting...
		</div>
	);
};

export default SetCookie;
