import { useEffect } from 'react';

const TelegramLogin = () => {
  useEffect(() => {
    // Определяем функцию для Telegram
    window.onTelegramAuth = function (user) {
      alert(
        'Logged in as ' +
          user.first_name +
          ' ' +
          user.last_name +
          ' (' +
          user.id +
          (user.username ? ', @' + user.username : '') +
          ')'
      );
    };

    // Добавляем сам виджет Telegram
    const script = document.createElement('script');
    script.src = 'https://telegram.org/js/telegram-widget.js?22';
    script.async = true;
    script.setAttribute('data-telegram-login', 'egeball21_bot');
    script.setAttribute('data-size', 'large');
    script.setAttribute('data-onauth', 'onTelegramAuth(user)');
    script.setAttribute('data-request-access', 'write');

    document.getElementById('telegram-login-container')?.appendChild(script);
  }, []);

  return <div id="telegram-login-container"></div>;
};

export default TelegramLogin;