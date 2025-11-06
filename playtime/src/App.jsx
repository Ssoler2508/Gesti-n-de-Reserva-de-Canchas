import React, { useState } from 'react'
import './App.css'
import Login from './Login'

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
    return <Login onBack={() => setPage('landing')} />
  }

  // landing (default)
  return (
    <Landing onLogin={() => setPage('login')} onRegister={() => setPage('register')} />
  )
}
