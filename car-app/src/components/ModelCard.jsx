import React from 'react'
import '../styles/ModelCard.css'



function ModelCard({ model }) {
  if (!model) return null

  const {
    Id,
    Car_Name,
    Low_Price,
    MPG,
    Seats,
    Cargo_Space,
    ['Compact/Comfort']: CompactComfort,
    ['Off-Road']: OffRoad,
    Fuel_Type,
    APR,
    ['lease-months']: leaseMonths,
    lease,
    Link
  } = model

  const href = Link ? String(Link).trim().split(/\s+/)[0] : ''
  
  const getImageUrl = (name, format) => {
    const url = new URL(`../assets/${name}.${format}`, import.meta.url).href
    return url
  }
  console.log('Model Id:', Id, 'Car Name:', Car_Name)

  return (
    <article className="model-card" style={{
      display: 'flex',
      flexDirection: 'column',
      height: '100%'
    }}>
      <header className="model-card__header">
        <h3 className="model-card__title">{Car_Name}</h3>
        {Low_Price && <div className="model-card__price">${Low_Price}</div>}
      </header>
      {Id && (
        <picture className="model-card__image">
          <source srcSet={getImageUrl(Id, 'avif')} type="image/avif" />
          <source srcSet={getImageUrl(Id, 'webp')} type="image/webp" />
          <img src={getImageUrl(Id, 'jpg')} alt={Car_Name} style={{
            width: '100%',
            height: '200px',
            objectFit: 'contain',
            borderRadius: '8px'
          }}/>
        </picture>
      )}
      <ul className="model-card__list" style={{ flexGrow: 1 }}>
        {MPG && <li><strong>MPG:</strong> {MPG}</li>}
        {Seats && <li><strong>Seats:</strong> {Seats}</li>}
        {Cargo_Space && <li><strong>Cargo:</strong> {Cargo_Space} cu ft</li>}
        {Fuel_Type && <li><strong>Fuel:</strong> {Fuel_Type}</li>}
        {CompactComfort && <li><strong>Class:</strong> {CompactComfort}</li>}
        {OffRoad && <li><strong>Off-Road:</strong> {OffRoad}</li>}
        {APR && <li><strong>APR:</strong> {APR}%</li>}
        {lease && <li><strong>Lease:</strong> ${lease} / mo {leaseMonths ? `for ${leaseMonths} months` : ''}</li>}
      </ul>

      <footer className="model-card__footer" style={{
        display: 'flex',
        justifyContent: 'flex-end',
        marginTop: 'auto',
        padding: '1rem'
      }}>
          {href ? (
            <a
              className="model-card__button"
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              style={{ textDecoration: 'none', display: 'inline-block' }}
            >
              Learn more
            </a>
          ) : (
            <button className="model-card__button" disabled>Learn more</button>
          )}
      </footer>
    </article>
  )
}


export default ModelCard
