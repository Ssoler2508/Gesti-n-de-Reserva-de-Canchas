import React, { useState } from 'react'
import './App.css'
import Login from './Login'
import Register from './Register'
import Dashboard from './Dashboard'
import Reserve from './Reserve'
import Reservations from './Reservations'
import Payments from './Payments'
import Profile from './Profile'

function Landing({ onLogin, onRegister }) {
  return (
    <div className="hero" role="main">
      {/* Use an <img> with object-fit:cover for more consistent full-viewport background on mobile */}
  <img src="/333 1.png" alt="Fondo PlayTime" className="bg-img" />
      <div className="hero-overlay" />

      <div className="hero-inner">
        <div className="logo-wrap">
          <img src="/logo play 1.png" alt="PlayTime" className="logo-img" />
        </div>

        <h1 className="hero-title">PlayTime</h1>
        <p className="hero-sub">Reserva fácil y rápida.<br />¡Juega sin límites con PlayTime!</p>

        <div className="hero-actions">
          <button className="btn primary" onClick={onLogin}>Iniciar Sesión</button>
          <button className="btn ghost" onClick={onRegister}>Registrarse</button>
        </div>
      </div>
    </div>
  )
}

export default function App() {
  const [page, setPage] = useState('landing')

  if (page === 'login') {
    return (
      <Login
        onBack={() => setPage('landing')}
        onRegister={() => setPage('register')}
        onSuccess={() => setPage('dashboard')}
      />
    )
  }

  if (page === 'register') {
    return (
      <Register
        onBack={() => setPage('landing')}
        onSuccess={() => setPage('dashboard')}
      />
    )
  }

  if (page === 'dashboard') {
    return <Dashboard onBack={() => setPage('landing')} onReserve={() => setPage('reserve')} onReservations={() => setPage('reservations')} onPayments={() => setPage('payments')} onProfile={() => setPage('profile')} />
  }

  if (page === 'reserve') {
    return <Reserve onBack={() => setPage('dashboard')} />
  }

  if (page === 'reservations') {
    return <Reservations onBack={() => setPage('dashboard')} />
  }

  if (page === 'payments') {
    return <Payments onBack={() => setPage('dashboard')} />
  }

  if (page === 'profile') {
    return <Profile onBack={() => setPage('dashboard')} />
  }

  // landing (default)
  return (
    <Landing onLogin={() => setPage('login')} onRegister={() => setPage('register')} />
  )
}
