import React from 'react'
import ModelCard from '../components/ModelCard'
import { usePreferences } from '../hooks/usePreferences.js'

export default function Match({ models = [] }) {
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

  return (
    <section style={{padding: '1rem'}}>
<<<<<<< HEAD
      {/* <h2>Match</h2>
=======
      <h2>Match</h2>
>>>>>>> 3346e5fe77a805de9b25a4b9004aaa14826932c5
      <div style={{ marginBottom: '1rem', padding: '1rem', backgroundColor: '#f5f5f5', borderRadius: '8px' }}>
        <h3>Current Preferences:</h3>
        <p>Max Price: ${preferences.price.toLocaleString()}</p>
        <p>Min MPG: {preferences.mpg}</p>
        <p>Min Seats: {preferences.seats}</p>
      </div>
<<<<<<< HEAD
       */}
=======
      
>>>>>>> 3346e5fe77a805de9b25a4b9004aaa14826932c5
      {filteredModels.length === 0 ? (
        <p>No models match your current preferences. Try adjusting your preferences to see more options.</p>
      ) : (
        <>
          <p>Found {filteredModels.length} models matching your preferences:</p>
          <div className="models-grid">
            {filteredModels.map((m, i) => (
              <ModelCard key={(m.Car_Name || 'model') + i} model={m} />
            ))}
          </div>
        </>
      )}
    </section>
  )
}
