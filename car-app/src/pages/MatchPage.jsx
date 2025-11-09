import React from 'react';
import ReactCarousel from 'react-bootstrap/Carousel';
import CarouselCard from '../components/CarouselCard.jsx';
import { usePreferences } from '../hooks/usePreferences.js';
import '../styles/MatchPage.css';

export default function MatchPage({ models = [] }) {
  const { preferences } = usePreferences();
  
  // Filter models based on user preferences
  const filteredModels = models.filter(model => {
    const price = parseInt(model.Low_Price?.replace(/[^0-9]/g, '') || '0');
    const mpg = parseInt(model.MPG?.replace(/[^0-9]/g, '') || '0');
    const seats = parseInt(model.Seats || '0');
    
    return price <= preferences.price && 
           mpg >= preferences.mpg && 
           seats >= preferences.seats;
  });

  if (filteredModels.length === 0) {
    return (
      <div className="match-page">
        <p>No models match your current preferences. Try adjusting your preferences to see more options.</p>
      </div>
    );
  }

  return (
    <div className="match-page">
      <ReactCarousel 
        indicators={true} 
        interval={null}
        controls={true} 
        touch={true}
        keyboard={true}
        pause="hover"
        prevIcon="x"
        nextIcon="♡"

        className="match-carousel"
      >
        {filteredModels.map((model, index) => (
          <ReactCarousel.Item key={`${model.Car_Name}-${index}`}>
            <div className="carousel-content">
              <CarouselCard model={model} />
            </div>
          </ReactCarousel.Item>
        ))}
      </ReactCarousel>
      <div className="match-count">
        Showing {filteredModels.length} matching vehicles
      </div>
    </div>
  );
}
