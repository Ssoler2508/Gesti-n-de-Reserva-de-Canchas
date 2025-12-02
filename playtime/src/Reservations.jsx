import React from 'react'
import './Reservations.css'
import HomeButton from './components/HomeButton'

export default function Reservations({ onBack, onHome, reservations = [], currentClient = 'Pedro Ospina' }) {
  const myReservations = reservations.filter(r => r.client === currentClient)

  return (
    <div className="reservations-page">
      <div className="reservations-top-left">
        <img src="/logo play 1.png" alt="PlayTime" />
      </div>

      <main className="reservations-main">
        <h1>Mis Reservas</h1>

        <h2 className="reservations-user">{currentClient}</h2>

        <table className="reservations-table">
          <thead>
            <tr>
              <th>Nombre</th>
              <th>Fecha</th>
              <th>Hora</th>
              <th>Precio</th>
              <th>Estado</th>
            </tr>
          </thead>
          <tbody>
            {myReservations.length ? myReservations.map((r) => (
              <tr key={r.id}>
                <td style={{textAlign:'left'}}>{r.client}</td>
                <td>{r.date}</td>
                <td>{r.hours}</td>
                <td>{r.price.toLocaleString('es-CO', { style: 'currency', currency: 'COP' })}</td>
                <td className={r.status === 'Confirmada' ? 'status-confirmed' : r.status === 'Rechazada' ? 'status-rejected' : 'status-pending'}>{r.status}</td>
              </tr>
            )) : (
              <tr><td colSpan={4} style={{textAlign:'center', color:'#555'}}>No tienes reservas</td></tr>
            )}
          </tbody>
        </table>

        <p className="reservations-note">“Consultar Otras <span className="link">Fechas</span> para Reservar la cancha que quieres”</p>
      </main>

      <footer className="reservations-footer">
        <HomeButton onClick={() => { if (typeof onBack === 'function') onBack(); else if (typeof onHome === 'function') onHome(); }} />
      </footer>
    </div>
  )
}
