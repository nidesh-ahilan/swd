import React, { useState } from 'react';
import './LoginPage.css';
import image from '../assets/bits-logo.png';

function generateCaptcha() {
  const num1 = Math.floor(Math.random() * 10);
  const num2 = Math.floor(Math.random() * 10);
  return { text: `${num1} + ${num2} = ?`, answer: num1 + num2 };
}

function LoginPage({ onLoggingIn }) {
  const [id, setID] = useState('');
  const [password, setPassword] = useState('');
  const [captcha, setCaptcha] = useState('');
  const [captchaValue, setCaptchaValue] = useState(generateCaptcha());

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!id || !password) {
      alert('ID and password are required.');
      return;
    }

    if (parseInt(captcha) !== captchaValue.answer) {
      alert('Incorrect CAPTCHA. Try again.');
      setCaptcha('');
      setCaptchaValue(generateCaptcha());
      return;
    }

    onLoggingIn(id, password);
  };

  return (
    <div className="login-container">
      <div className="image-container">
        <img src={image} alt="BITS Pilani" />
      </div>

      <div className="form-container">
        <h2>Welcome to SWD Portal</h2>

        <form onSubmit={handleSubmit}>
          <div className="input-box">
            <input type="text" required placeholder="ID" value={id} onChange={(e) => setID(e.target.value)} />
          </div>

          <div className="input-box">
            <input type="password" required placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
          </div>

          <div className="captcha-container">
            <p>{captchaValue.text}</p>
            <input type="number" required placeholder="Enter CAPTCHA" value={captcha} onChange={(e) => setCaptcha(e.target.value)} />
          </div>

          <button type="submit">Login</button>
        </form>
      </div>
    </div>
  );
}

export default LoginPage;
