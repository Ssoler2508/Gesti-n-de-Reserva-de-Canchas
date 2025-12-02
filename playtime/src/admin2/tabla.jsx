import React from 'react'
import './Admin2.css'
import '../components/RecentReservations.css'
import HomeButton from '../components/HomeButton'

export default function Tabla({ reservations = [], onAccept = () => {}, onModify = () => {}, onReject = () => {}, onDelete = () => {}, onBack = null, onBackToChart = null }) {
  return (
    <div className="admin2-page">
      <div className="admin2-top-left">
        <button className="logo-btn" type="button" aria-label="Ir al inicio" onClick={() => { if (typeof onBack === 'function') onBack() }}>
          <img src="/logo play 1.png" alt="PlayTime" />
        </button>
      </div>

      <main className="admin2-main">
        <h1>Tabla de Reservas — Administrador</h1>

        <div className="admin2-reservations">
          <div className="recent-reservations">
            <h2>Reservas Recientes</h2>
            <div className="recent-table-wrap">
              <table className="recent-table">
                <thead>
                  <tr>
                    <th>Cliente</th>
                    <th>Fecha</th>
                    <th>Hora</th>
                    <th>Precio</th>
                    <th>Estado</th>
                    <th>Acciones</th>
                  </tr>
                </thead>
                <tbody>
                  {reservations.map(r => (
                    <tr key={r.id} className={r.status === 'Rechazada' ? 'row-rejected' : ''}>
                      <td style={{textAlign:'left'}}>{r.client}</td>
                      <td>{r.date}</td>
                      <td>{r.hours}</td>
                      <td>{r.price.toLocaleString('es-CO', { style: 'currency', currency: 'COP' })}</td>
                      <td className={r.status === 'Confirmada' ? 'status-confirmed' : r.status === 'Rechazada' ? 'status-rejected' : 'status-pending'}>{r.status}</td>
                      <td className="actions-cell">
                        <button className="btn primary" onClick={() => onAccept(r.id)}>Aceptar</button>
                        <button className="btn ghost" onClick={() => onModify(r.id)}>Modificar</button>
                        <button className="btn danger" onClick={() => onReject(r.id)}>Rechazar</button>
                        <button className="btn danger" style={{marginLeft:8}} onClick={() => { if (confirm('Eliminar reserva #' + r.id + '?')) onDelete(r.id) }}>Eliminar</button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div style={{marginTop:14, textAlign:'center'}}>
              <button className="btn" onClick={() => { if (typeof onBackToChart === 'function') onBackToChart() }}>Volver a la gráfica</button>
            </div>
          </div>
        </div>
      </main>

      <footer className="admin2-footer">
        <HomeButton onClick={() => { if (typeof onBack === 'function') onBack() }} />
      </footer>
    </div>
  )
}
