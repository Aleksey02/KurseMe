if (process.env.NODE_ENV === 'production') {
	if (typeof window.__REACT_DEVTOOLS_GLOBAL_HOOK__ === 'object') {
		for (const [key, value] of Object.entries(window.__REACT_DEVTOOLS_GLOBAL_HOOK__)) {
			window.__REACT_DEVTOOLS_GLOBAL_HOOK__[key] =
			typeof value === 'function' ? () => {} : null;
		}
	}
}


import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.scss'
import { ToastContainer } from 'react-toastify'


createRoot(document.getElementById('root')).render(
<StrictMode>
	<App />
	<ToastContainer position='bottom-right' autoClose={2000} />
</StrictMode>,
);
