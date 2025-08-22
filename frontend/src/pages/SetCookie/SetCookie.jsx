import React, { useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';

const SetCookie = () => {
	const [searchParams] = useSearchParams();
	const next = searchParams.get('next') || '/';
	const sessionId = searchParams.get('userSessionId') || '';

	useEffect(() => {
		// Пример установки куки (если нужно)
		document.cookie = `userSessionId=${sessionId}; path=/; Secure; SameSite=Lax`;

		// Редирект
		window.location.replace(next);
		
	}, [next]);

	return (
		<div>
			Redirecting...
		</div>
	);
};

export default SetCookie;