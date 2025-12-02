import React, { useEffect, useState } from 'react'
import './Dashboard.css'
import HomeButton from './components/HomeButton'

function Tile({ icon, label, onClick, className }) {
  return (
    <button
      className={`dash-item ${className || ''}`}
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

export default function Dashboard({ onBack, onReserve, onReservations, onPayments, onProfile, onAdmin }) {
  const [currentUser, setCurrentUser] = useState(null)

  useEffect(() => {
    let mounted = true
    async function load() {
      // Try server session first
      try {
        const res = await fetch('/api/auth/me', { credentials: 'include' })
        if (res.ok) {
          const body = await res.json().catch(() => ({}))
          if (mounted && body && body.user) {
            setCurrentUser(body.user)
            return
          }
        }
      } catch {
        // ignore
      }

      // fallback to localStorage
      try {
        const stored = JSON.parse(localStorage.getItem('user'))
        if (mounted && stored) setCurrentUser(stored)
      } catch {
        // ignore
      }
    }
    load()
    return () => { mounted = false }
  }, [])
  return (
    <div className="dashboard-page">
      <div className="dashboard-top-left">
        <button className="logo-btn" type="button" aria-label="Ir al inicio" onClick={() => { if (typeof onBack === 'function') onBack() }}>
          <img src="/logo play 1.png" alt="PlayTime" />
        </button>
      </div>

      <main className="dashboard-main">
        <h1>Bienvenido, Pedro!</h1>

        <div className="dash-grid">
          <Tile icon={<span>🏟️</span>} label="Reservar Cancha" onClick={() => { if (typeof onReserve === 'function') onReserve() }} />
          <Tile icon={<span>📋</span>} label="Mis Reservas" onClick={() => { if (typeof onReservations === 'function') onReservations() }} />
          <Tile icon={<span>💲</span>} label="Historico de Pagos" onClick={() => { if (typeof onPayments === 'function') onPayments() }} />
          <Tile icon={<span>👤</span>} label="Perfil" onClick={() => { if (typeof onProfile === 'function') onProfile() }} />
          {currentUser && currentUser.role === 'admin' && (
            <Tile icon={<span>🛠️</span>} label="Admin" onClick={() => { if (typeof onAdmin === 'function') onAdmin() }} className="admin-tile" />
          )}
        </div>
      </main>

      <footer className="dashboard-footer">
        <HomeButton onClick={() => { if (typeof onBack === 'function') onBack() }} />
      </footer>
    </div>
  )
}
