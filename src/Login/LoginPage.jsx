import React, { useState } from 'react';
import './LoginPage.css';
import logo from './assets/BITS PILANI.png';
import bgImage from './assets/BGI.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faFacebook, faTwitter, faLinkedin, faYoutube } from '@fortawesome/free-brands-svg-icons';

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
    <div className="login-page">
      <div className="login-container">
        <div className="logo-section">
          <img src={logo} alt="BITS Pilani Logo" className="logo" />
        </div>
        <div className="form-section">
          <h2>Student Welfare Division</h2>
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
            <button type="submit" className="login-button">Login</button>
          </form>
          <div className="social-icons">
            <FontAwesomeIcon icon={faFacebook} style={{ color: "#000", fontSize: "30px", cursor: "pointer", marginRight: "15px" }} 
              onClick={() => window.open("https://www.facebook.com/universitybitspilani/", "_blank")} />
            <FontAwesomeIcon icon={faTwitter} style={{ color: "#000", fontSize: "30px", cursor: "pointer", marginRight: "15px" }} 
              onClick={() => window.open("https://x.com/BITSPilaniIndia", "_blank")} />
            <FontAwesomeIcon icon={faInstagram} style={{ color: "#000", fontSize: "30px", cursor: "pointer", marginRight: "15px" }} 
              onClick={() => window.open("https://www.instagram.com/bitspilaniofficial/", "_blank")} />
            <FontAwesomeIcon icon={faLinkedin} style={{ color: "#000", fontSize: "30px", cursor: "pointer", marginRight: "15px" }} 
              onClick={() => window.open("https://www.linkedin.com/feed/update/urn:li:activity:6980400626203570178/", "_blank")} />
            <FontAwesomeIcon icon={faYoutube} style={{ color: "#000", fontSize: "30px", cursor: "pointer" }} 
              onClick={() => window.open("https://www.youtube.com/user/BITSpilaniTechMedia/videos", "_blank")} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default LoginPage;

