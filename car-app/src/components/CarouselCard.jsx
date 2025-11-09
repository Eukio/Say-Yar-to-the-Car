import React from 'react'
import '../styles/CarouselCard.css'

function CarouselCard({ model }) {
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
    <article className="carousel-card" style={{
      display: 'flex',
      flexDirection: 'column',
      height: '100%'
    }}>
      <header className="carousel-card__header">
        <h3 className="carousel-card__title">{Car_Name}</h3>
        {Low_Price && <div className="carousel-card__price">${Low_Price}</div>}
      </header>
      {Id && (
        <picture className="carousel-card__image">
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
      <ul className="carousel-card__list" style={{ flexGrow: 1 }}>
        {MPG && <li><strong>MPG:</strong> {MPG}</li>}
        {Seats && <li><strong>Seats:</strong> {Seats}</li>}
        {Cargo_Space && <li><strong>Cargo:</strong> {Cargo_Space} cu ft</li>}
        {Fuel_Type && <li><strong>Fuel:</strong> {Fuel_Type}</li>}
        {CompactComfort && <li><strong>Class:</strong> {CompactComfort}</li>}
        {OffRoad && <li><strong>Off-Road:</strong> {OffRoad}</li>}
        {APR && <li><strong>APR:</strong> {APR}%</li>}
        {lease && <li><strong>Lease:</strong> ${lease} / mo {leaseMonths ? `for ${leaseMonths} months` : ''}</li>}
      </ul>

     <footer className="carousel-card__footer" style={{
  display: 'flex',
  justifyContent: 'flex-end',
  marginTop: 'auto',
  padding: '1rem'
}}>
  {href ? (
    <button
      className="carousel-card__button"
      onClick={() => window.open(href, "_blank")}
    >
      Take Me for a Test Drive!
    </button>
  ) : (
    <button className="carousel-card__button" disabled>
      Take Me for a Test Drive!
    </button>
  )}
</footer>

    </article>
  )
}

export default CarouselCard
