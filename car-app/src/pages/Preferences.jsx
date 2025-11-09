import React, { useState, useEffect, useCallback } from 'react'
import DiscreteSlider from '../components/Slider.jsx'
import { usePreferences } from '../hooks/usePreferences.js'
import Match from '../components/Match.jsx'
import nextbtn from '../assets/btn/getmatched-btn.png'
import '../styles/Preferences.css'

const PRICE_OPTIONS = {
  label: "Price",
  default_value: 30000,
  shift_step: 10000,
  step: 5000,
  min: 20000,
  max: 100000,
}

const SEAT_OPTIONS = {
  label: "Seats",
  default_value: 5,
  shift_step: 1,
  step: 1,
  min: 2,
  max: 7,
}

const MPG_OPTIONS = {
  label: "Miles Per Gallon",
  default_value: 30,
  shift_step: 10,
  step: 5,
  min: 10,
  max: 50,
}

export default function Preferences({ models = [], onNavigate }) {
  const { preferences, updatePreferences } = usePreferences()
  
  const [priceValue, setPriceValue] = useState(preferences.price)
  const [seatValue, setSeatValue] = useState(preferences.seats)
  const [mpgValue, setMpgValue] = useState(preferences.mpg)

  // Debounced update to context
  const debouncedUpdate = useCallback(() => {
    updatePreferences({
      price: priceValue,
      seats: seatValue,
      mpg: mpgValue
    })
  }, [priceValue, seatValue, mpgValue, updatePreferences])

  useEffect(() => {
    const timer = setTimeout(debouncedUpdate, 300)
    return () => clearTimeout(timer)
  }, [debouncedUpdate])

  const handlePriceChange = (newValue) => {
    setPriceValue(newValue)
  }

  const handleSeatChange = (newValue) => {
    setSeatValue(newValue)
  }

  const handleMpgChange = (newValue) => {
    setMpgValue(newValue)
  }

  const handleNextClick = () => {
    if (onNavigate) {
      onNavigate('match')
    }
  }

  return (
    <section>
      <div className="preferences-container">
        <h2 className="preferences-title">Preferences</h2>
        
        <div className="preferences-sliders">
          <div className="preferences-slider-group">
            <h3>Max Price: ${priceValue.toLocaleString()}</h3>
            <DiscreteSlider 
              options={PRICE_OPTIONS}
              value={priceValue}
              onChange={handlePriceChange}
            />
          </div>
          
          <div className="preferences-slider-group">
            <h3>Seating Capacity: {seatValue}</h3>
            <DiscreteSlider 
              options={SEAT_OPTIONS}
              value={seatValue}
              onChange={handleSeatChange}
            />
          </div>
          
          <div className="preferences-slider-group">
            <h3>Miles Per Gallon: {mpgValue}</h3>
            <DiscreteSlider 
              options={MPG_OPTIONS}
              value={mpgValue}
              onChange={handleMpgChange}
            />
          </div>
        </div>
      </div>
      <div>
        <img
          src={nextbtn}
          alt="Get Matched"
          className="next-button"
          onClick={handleNextClick}
        />
      </div>
      
      <Match models={models} />
    </section>
  )
}