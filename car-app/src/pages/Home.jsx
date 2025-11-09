import React from 'react';
import '../styles/Home.css';
import toyotaImage from '../assets/logos/toyota_logo.png';
import ignitionLogo from '../assets/logos/ignition_logo.png';
import startBtn from '../assets/btn/start-btn.png';

export default function Home({ onNavigate }) {
  const handleClick = () => {
    onNavigate('preferences'); // switch state in App
  };

  return (
    <section className="main-home">
      <div>
        <img src={toyotaImage} alt="Toyota Cars" className="toyota-logo" />
      </div>
      <div>
        <img src={ignitionLogo} alt="Ignition Logo" className="ignition-logo-responsive w-full max-w-[30rem] h-auto mb-5 mx-auto px-4 md:px-0" />
      </div>
      <div>
        <h1 className="heading1">Spark your dream ride</h1>
     <p className="norm-text">
     <span className="highlight w-[50%]">Fall in love with your ride:</span> match with the car of your dreams with Toyota in less than 30 minutes!
    </p>

      </div>
      <img
        src={startBtn}
        alt="Start Button"
        className="start-button"
        onClick={handleClick}
        style={{ cursor: 'pointer' }}
      />
    </section>
  );
}
