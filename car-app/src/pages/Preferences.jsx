import React, { useState, useEffect, useCallback } from 'react'
import DiscreteSlider from '../components/Slider.jsx'
import { usePreferences } from '../hooks/usePreferences.js'
<<<<<<< HEAD
import Match from './Match.jsx';
=======
>>>>>>> 3346e5fe77a805de9b25a4b9004aaa14826932c5

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
<<<<<<< HEAD
export default function Preferences({models = []}) {
=======
export default function Preferences() {
>>>>>>> 3346e5fe77a805de9b25a4b9004aaa14826932c5
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
<<<<<<< HEAD
    <section> 
      <div style={{
=======
    <section style={{
      padding: '1rem',
>>>>>>> 3346e5fe77a805de9b25a4b9004aaa14826932c5
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'flex-start',
<<<<<<< HEAD
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
=======
      minHeight: '100vh',
      maxWidth: '600px',
      margin: '0 auto',
      gap: '2rem'
    }}>
      <h2>Preferences</h2>
      <h3>Price: ${priceValue.toLocaleString()}</h3>
      <div>
>>>>>>> 3346e5fe77a805de9b25a4b9004aaa14826932c5
        <DiscreteSlider 
          options={price_options}
          value={priceValue}
          onChange={handlePriceChange}
        />
      </div>
<<<<<<< HEAD
      <div>
      <h3>Seats: {seatValue}</h3>
=======
      <h3>Seats: {seatValue}</h3>
      <div>
>>>>>>> 3346e5fe77a805de9b25a4b9004aaa14826932c5
        <DiscreteSlider 
          options={seat_options}
          value={seatValue}
          onChange={handleSeatChange}
        />
      </div>
<<<<<<< HEAD
      <div>
      <h3>Miles Per Gallon: {mpgValue}</h3>
=======
      <h3>Miles Per Gallon: {mpgValue}</h3>
      <div>
>>>>>>> 3346e5fe77a805de9b25a4b9004aaa14826932c5
        <DiscreteSlider 
          options={MPG_options}
          value={mpgValue}
          onChange={handleMpgChange}
        />
      </div>
<<<<<<< HEAD
      </div>
      </div>
      <Match models={models}></Match>
=======
      
>>>>>>> 3346e5fe77a805de9b25a4b9004aaa14826932c5
    </section>
  )
}
