import React, { useState, useEffect, useCallback } from 'react'
import DiscreteSlider from '../components/Slider.jsx'
import { usePreferences } from '../hooks/usePreferences.js'
import Match from './Match.jsx';

const price_options = {
        label: "Price",
        default_value: 30000,
        shift_step: 10000,
        step: 5000,
        min: 20000,
        max: 100000,
};
const seat_options = {
        label: "Seats",
        default_value: 5,
        shift_step: 1,
        step: 1,
        min: 2,
        max: 7,
};
const MPG_options = {
        label: "Miles Per Gallon",
        default_value: 30,
        shift_step: 10,
        step: 5,
        min: 10,
        max: 50,
};
export default function Preferences({models = []}) {
  // Use the preferences context
  const { preferences, updatePreferences } = usePreferences();
  
  // State to store slider values (initialized from context)
  const [priceValue, setPriceValue] = useState(preferences.price);
  const [seatValue, setSeatValue] = useState(preferences.seats);
  const [mpgValue, setMpgValue] = useState(preferences.mpg);

  // Debounced update to context
  const debouncedUpdate = useCallback(() => {
    updatePreferences({
      price: priceValue,
      seats: seatValue,
      mpg: mpgValue
    });
  }, [priceValue, seatValue, mpgValue, updatePreferences]);

  // Update context with debouncing
  useEffect(() => {
    const timer = setTimeout(debouncedUpdate, 300); // 300ms delay
    return () => clearTimeout(timer);
  }, [debouncedUpdate]);

  // Handler functions for each slider
  const handlePriceChange = (newValue) => {
    setPriceValue(newValue);
    console.log('Price changed to:', newValue);
  };

  const handleSeatChange = (newValue) => {
    setSeatValue(newValue);
    console.log('Seats changed to:', newValue);
  };

  const handleMpgChange = (newValue) => {
    setMpgValue(newValue);
    console.log('MPG changed to:', newValue);
  };

  return (
    <section> 
      <div style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'flex-start',
      padding: '2rem',
    }}> 
      <h2>Preferences</h2>
      <div style={{
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
      gap: '2rem',
      width: '100%'
    }}>
      <div>
      <h3>Price: ${priceValue.toLocaleString()}</h3>
        <DiscreteSlider 
          options={price_options}
          value={priceValue}
          onChange={handlePriceChange}
        />
      </div>
      <div>
      <h3>Seats: {seatValue}</h3>
        <DiscreteSlider 
          options={seat_options}
          value={seatValue}
          onChange={handleSeatChange}
        />
      </div>
      <div>
      <h3>Miles Per Gallon: {mpgValue}</h3>
        <DiscreteSlider 
          options={MPG_options}
          value={mpgValue}
          onChange={handleMpgChange}
        />
      </div>
      </div>
      </div>
      <Match models={models}></Match>
    </section>
  )
}
