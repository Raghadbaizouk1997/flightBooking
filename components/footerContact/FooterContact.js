import { useState } from 'react';
import { useRouter } from 'next/router';

export const FooterContact = () => {
  const [telegramUsername, setTelegramUsername] = useState("");
  const router = useRouter();

  const handleInputChange = (event) => {
    setTelegramUsername(event.target.value);
  };

  const handleLogin = () => {
    const telegramURL = `https://t.me/${telegramUsername}`;
    window.location.href = telegramURL;
  };
  return (
    <div className="footer-contact --flex-between">
      <div>
        <h1 className='--font-weight-bold text-color-white'>Have you any question? Let us help you!</h1>
        <p>Lörem ipsum krorat ekosiv och sende anim</p>
      </div>
      <div>
        <input
          type="text"
          value={telegramUsername}
          onChange={handleInputChange}
          placeholder="Enter your Telegram username"
        />
        <button onClick={handleLogin}>Go to Telegram</button>
      </div>
    </div>
  );
};
