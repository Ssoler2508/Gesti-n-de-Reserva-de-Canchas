import React from 'react'
import './Reserve.css'

export default function Reserve({ onBack }) {
  const courts = [
    { name: 'Cancha #1 (4 vs 4)', hours: '7:00 AM - 8:00 PM', price: '$40.000 COP / Hora' },
    { name: 'Cancha #2 (5 vs 5)', hours: '7:00 AM - 8:00 PM', price: '$50.000 COP / Hora' },
    { name: 'Cancha #3 (6 vs 6)', hours: '7:00 AM - 8:00 PM', price: '$60.000 COP / Hora' },
    { name: 'Cancha #4 (8 vs 8)', hours: '7:00 AM - 8:00 PM', price: '$80.000 COP / Hora' }
  ]

  function handleReserve() {
    alert('Simulación: reserva realizada (sin backend).')
  }

  return (
    <div className="reserve-page">
      <div className="reserve-top-left">
        <img src="/logo play 1.png" alt="PlayTime" />
      </div>

      <main className="reserve-main">
        <h1>Reservar Cancha</h1>

        <h2 className="reserve-sub">Tablero de Canchas</h2>

        <table className="courts-table" role="table">
          <thead>
            <tr>
              <th>Nombre Cancha</th>
              <th>Hora de Disponibilidad</th>
              <th>Precio de la Cancha</th>
            </tr>
          </thead>
          <tbody>
            {courts.map((c, i) => (
              <tr key={i}>
                <td>{c.name}</td>
                <td>{c.hours}</td>
                <td>{c.price}</td>
              </tr>
            ))}
          </tbody>
        </table>

        <div style={{marginTop:28}}>
          <button className="btn reserve-action" onClick={handleReserve}>Realizar Reserva</button>
        </div>
      </main>

      <footer className="reserve-footer" />
    </div>
  )
}
