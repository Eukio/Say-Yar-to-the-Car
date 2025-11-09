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
        <img src={ignitionLogo} alt="Ignition Logo" className="ignition-logo" />
      </div>
      <div>
        <h1 className="heading1">Spark your dream ride</h1>
     <p className="norm-text">
  We promise you’ll find your car with Toyota in less than 
  <span className="highlight">30 minutes</span>!  
  Use the navigation above to view preferences or find a match.
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
