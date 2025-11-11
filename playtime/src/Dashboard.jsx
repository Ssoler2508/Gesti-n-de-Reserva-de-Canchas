import React from 'react'
import './Dashboard.css'

function Tile({ icon, label, onClick }) {
  return (
    <button
      className="dash-item"
      onClick={onClick}
      aria-label={label}
      type="button"
    >
      <div className="dash-square">
        <div className="dash-icon">{icon}</div>
      </div>
      <div className="dash-label">{label}</div>
    </button>
  )
}

export default function Dashboard({ onBack, onReserve, onReservations, onPayments, onProfile }) {
  return (
    <div className="dashboard-page">
      <div className="dashboard-top-left">
        <img src="/logo play 1.png" alt="PlayTime" />
      </div>

      <main className="dashboard-main">
        <h1>Bienvenido, Pedro!</h1>

        <div className="dash-grid">
          <Tile icon={<span>🏟️</span>} label="Reservar Cancha" onClick={() => { if (typeof onReserve === 'function') onReserve() }} />
          <Tile icon={<span>📋</span>} label="Mis Reservas" onClick={() => { if (typeof onReservations === 'function') onReservations() }} />
          <Tile icon={<span>💲</span>} label="Historico de Pagos" onClick={() => { if (typeof onPayments === 'function') onPayments() }} />
          <Tile icon={<span>👤</span>} label="Perfil" onClick={() => { if (typeof onProfile === 'function') onProfile() }} />
        </div>
      </main>

      <footer className="dashboard-footer">
        <button className="home-btn" aria-label="Inicio">🏠</button>
      </footer>
    </div>
  )
}
