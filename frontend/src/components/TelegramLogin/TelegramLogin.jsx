import { useEffect } from 'react';

const TelegramLogin = ({setIsAuth}) => {

  useEffect(() => {
    // Создаём Telegram Login Widget скрипт
    const script = document.createElement('script');
    script.src = 'https://telegram.org/js/telegram-widget.js?22';
    script.async = true;
    script.setAttribute('data-telegram-login', 'egeball21_bot');
    script.setAttribute('data-size', 'large');
    script.setAttribute('data-auth-url', 'https://snosy.cc/v1/api/login/');
    script.setAttribute('data-request-access', 'write');

    // Вставляем скрипт в контейнер
    const container = document.getElementById('telegram-login-container');
    if (container) {
      container.innerHTML = '';
      container.appendChild(script);
    }
  }, []);

  return <div id="telegram-login-container"></div>;
};

export default TelegramLogin;
