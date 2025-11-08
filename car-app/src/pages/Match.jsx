import React from 'react'
import ModelCard from '../components/ModelCard'

export default function Match({ models = [] }) {
  return (
    <section style={{padding: '1rem'}}>
      <h2>Match</h2>
      {models.length === 0 ? (
        <p>No models available.</p>
      ) : (
        <div className="models-grid">
          {models.map((m, i) => (
            <ModelCard key={(m.Car_Name || 'model') + i} model={m} />
          ))}
        </div>
      )}
    </section>
  )
}
