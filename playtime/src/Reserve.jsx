import React, { useState } from 'react'
import './Reserve.css'
import HomeButton from './components/HomeButton'

export default function Reserve({ onBack, onCreateReservation = () => {}, currentClient = null }) {
  const [selectedCourt, setSelectedCourt] = useState(0)
  const courts = [
    { id: 1, name: 'Cancha #1 (4 vs 4)', hours: '7:00 AM - 8:00 PM', price: 40000 },
    { id: 2, name: 'Cancha #2 (5 vs 5)', hours: '7:00 AM - 8:00 PM', price: 50000 },
    { id: 3, name: 'Cancha #3 (6 vs 6)', hours: '7:00 AM - 8:00 PM', price: 60000 },
    { id: 4, name: 'Cancha #4 (8 vs 8)', hours: '7:00 AM - 8:00 PM', price: 80000 }
  ]

  function handleReserve() {
    // Always ask for the client's name when creating a reservation
    const client = prompt('Nombre del cliente', currentClient || 'Nombre Apellido')
    if (!client) return
    const date = prompt('Fecha (YYYY-MM-DD)', new Date().toISOString().slice(0,10))
    if (!date) return
    const hours = prompt('Hora (ej. 19:00)', '19:00')
    if (!hours) return
    // Use the price of the selected court (no manual price input)
    const price = courts[selectedCourt] ? courts[selectedCourt].price : 0
    onCreateReservation({ client, date, hours, price })
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
              <th>Seleccionar</th>
              <th>Nombre Cancha</th>
              <th>Hora de Disponibilidad</th>
              <th>Precio / Hora</th>
            </tr>
          </thead>
          <tbody>
            {courts.map((c, i) => (
              <tr key={c.id} className={selectedCourt === i ? 'selected-row' : ''}>
                <td style={{textAlign:'center'}}>
                  <input type="radio" name="court" checked={selectedCourt === i} onChange={() => setSelectedCourt(i)} />
                </td>
                <td>{c.name}</td>
                <td>{c.hours}</td>
                <td>{c.price.toLocaleString('es-CO', { style: 'currency', currency: 'COP' })}</td>
              </tr>
            ))}
          </tbody>
        </table>

          <div style={{marginTop:28}}>
            <button className="btn reserve-action" onClick={handleReserve}>Realizar Reserva</button>
          </div>
      </main>

      <footer className="reserve-footer">
        <HomeButton onClick={() => { if (typeof onBack === 'function') onBack() }} />
      </footer>
    </div>
  )
}
