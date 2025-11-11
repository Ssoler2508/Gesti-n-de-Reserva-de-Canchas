import React from 'react'
import './Reservations.css'

export default function Reservations({ onBack }) {
  const reservations = [
    { date: '4 - 11 - 2025 / 9:00 PM', status: 'Confirmada' , statusClass: 'status-confirmed'},
    { date: '10 - 11 - 2025 / 10:00 AM', status: 'Rechazada' , statusClass: 'status-rejected'}
  ]

  return (
    <div className="reservations-page">
      <div className="reservations-top-left">
        <img src="/logo play 1.png" alt="PlayTime" />
      </div>

      <main className="reservations-main">
        <h1>Mis Reservas</h1>

        <h2 className="reservations-user">Pedro Ospina</h2>

        <table className="reservations-table">
          <thead>
            <tr>
              <th>Fecha de Reserva</th>
              <th>Estado</th>
            </tr>
          </thead>
          <tbody>
            {reservations.map((r, i) => (
              <tr key={i}>
                <td>{r.date}</td>
                <td className={r.statusClass}>{r.status}</td>
              </tr>
            ))}
          </tbody>
        </table>

        <p className="reservations-note">“Consultar Otras <span className="link">Fechas</span> para Reservar la cancha que quieres”</p>
      </main>

      <footer className="reservations-footer">
        <button className="home-btn" aria-label="Inicio" onClick={onBack}>🏠</button>
      </footer>
    </div>
  )
}
