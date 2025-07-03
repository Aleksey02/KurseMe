import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const TelegramLogin = ({ setIsAuth }) => {
  useEffect(() => {
    // Сохраняем setIsAuth в глобальную переменную
    window.__setIsAuth = setIsAuth;

    // Глобальная функция для Telegram Login Widget
    window.onTelegramAuth = function (user) {
      if (typeof window.__setIsAuth === 'function') {
        const navigate = useNavigate();
        
        window.__setIsAuth(user);
        navigate('/');
      } else {
        console.warn('⚠️ setIsAuth is not a function');
      }
    };

    // Создаём и настраиваем скрипт Telegram
    const script = document.createElement('script');
    script.src = 'https://telegram.org/js/telegram-widget.js?22';
    script.async = true;
    script.setAttribute('data-telegram-login', 'egeball21_bot'); // Имя бота без @
    script.setAttribute('data-size', 'large');
    script.setAttribute('data-userpic', 'true');
    script.setAttribute('data-request-access', 'write');
    script.setAttribute('data-onauth', 'onTelegramAuth(user)');

    const container = document.getElementById('telegram-login-container');
    if (container) {
      container.innerHTML = ''; // Очищаем, чтобы не вставлять дублирующийся iframe
      container.appendChild(script);
    }

    // Очистка
    return () => {
      delete window.onTelegramAuth;
      delete window.__setIsAuth;
    };
  }, [setIsAuth]);

  return <div id="telegram-login-container"></div>;
};

export default TelegramLogin;