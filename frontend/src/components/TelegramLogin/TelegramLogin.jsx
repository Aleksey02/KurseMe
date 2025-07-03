import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const TelegramLogin = ({ setIsAuth }) => {
  const navigate = useNavigate(); 

  useEffect(() => {
    // Сохраняем setIsAuth и navigate в глобальные переменные
    window.__setIsAuth = setIsAuth;
    window.__navigate = navigate;

    // Глобальная функция для Telegram Login Widget
    window.onTelegramAuth = function (user) {
      if (typeof window.__setIsAuth === 'function') {
        window.__setIsAuth(user);
        if (typeof window.__navigate === 'function') {
          window.__navigate('/'); // ✅ переход на главную
        }
      } else {
        console.warn('⚠️ setIsAuth is not a function');
      }
    };

    // Создаём и вставляем Telegram-виджет
    const script = document.createElement('script');
    script.src = 'https://telegram.org/js/telegram-widget.js?22';
    script.async = true;
    script.setAttribute('data-telegram-login', 'egeball21_bot');
    script.setAttribute('data-size', 'large');
    script.setAttribute('data-userpic', 'true');
    script.setAttribute('data-request-access', 'write');
    script.setAttribute('data-onauth', 'onTelegramAuth(user)');

    const container = document.getElementById('telegram-login-container');
    if (container) {
      container.innerHTML = '';
      container.appendChild(script);
    }

    // Очистка
    return () => {
      delete window.__setIsAuth;
      delete window.__navigate;
      delete window.onTelegramAuth;
    };
  }, [setIsAuth, navigate]);

  return <div id="telegram-login-container"></div>;
};

export default TelegramLogin;