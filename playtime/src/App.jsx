import React, { useState, useEffect } from 'react'
import './App.css'
import Login from './Login'
import Register from './Register'
import Dashboard from './Dashboard'
import Reserve from './Reserve'
import Reservations from './Reservations'
import Payments from './Payments'
import Profile from './Profile'
import Admin2 from './admin2/Admin2'
import Tabla from './admin2/tabla'

function Landing({ onLogin, onRegister }) {
  return (
    <div className="hero" role="main">
      {}
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
          <button className="btn primary" onClick={onRegister}>Registrarse</button>
        </div>
      </div>
    </div>
  )
}

export default function App() {
  const [page, setPage] = useState('landing')
  const [isAdmin, setIsAdmin] = useState(false)
  const [currentClient, setCurrentClient] = useState('Pedro Ospina')
  const initialReservations = [
    { id: 1, client: 'Pedro Ospina', date: '2025-11-04', hours: '21:00', price: 80000, status: 'Pendiente' },
    { id: 2, client: 'Ana Martinez', date: '2025-11-05', hours: '18:00', price: 50000, status: 'Confirmada' },
    { id: 3, client: 'Carlos Ruiz', date: '2025-11-06', hours: '20:00', price: 60000, status: 'Pendiente' },
    { id: 4, client: 'Pedro Ospina', date: '2025-11-10', hours: '10:00', price: 40000, status: 'Rechazada' }
  ]
  const [reservations, setReservations] = useState(initialReservations)

  function acceptReservation(id) {
    setReservations(rs => rs.map(r => r.id === id ? { ...r, status: 'Confirmada' } : r))
  }

  function rejectReservation(id) {
    setReservations(rs => rs.map(r => r.id === id ? { ...r, status: 'Rechazada' } : r))
  }

  function modifyHours(id, newHours) {
    setReservations(rs => rs.map(r => r.id === id ? { ...r, hours: newHours, status: 'Modificada' } : r))
  }

  function deleteReservation(id) {
    setReservations(rs => rs.filter(r => r.id !== id))
  }

  function addReservation({ client, date, hours, price }) {
    const nextId = reservations.length ? Math.max(...reservations.map(r => r.id)) + 1 : 1
    const newRes = { id: nextId, client, date, hours, price: Number(price) || 0, status: 'Pendiente' }
    setReservations(rs => [newRes, ...rs])
    return newRes
  }

  useEffect(() => {
    function onKey(e) {
      // Ctrl+Shift+A opens admin prompt
      if (e.ctrlKey && e.shiftKey && (e.key === 'A' || e.key === 'a')) {
        const pw = prompt('Acceso administrador — ingresa la contraseña')
        // simple password check (change as needed)
        if (pw === 'admin123') {
          setIsAdmin(true)
          setPage('admin2')
        } else {
          alert('Contraseña incorrecta')
        }
      }
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [])

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
        onLogin={() => setPage('login')}
      />
    )
  }

  if (page === 'dashboard') {
    return <Dashboard onBack={() => setPage('landing')} onReserve={() => setPage('reserve')} onReservations={() => setPage('reservations')} onPayments={() => setPage('payments')} onProfile={() => setPage('profile')} onAdmin2={() => setPage('admin2')} />
  }

  if (page === 'admin2') {
    if (!isAdmin) {
      // if someone somehow sets page to admin2 without authorization, redirect to landing
      setPage('landing')
      return null
    }
    return <Admin2 onBack={() => setPage('dashboard')} onOpenTabla={() => setPage('admin2-table')} reservations={reservations} onAccept={acceptReservation} onReject={rejectReservation} onModify={(id) => {
      const current = reservations.find(r => r.id === id)
      const newHours = prompt('Modificar horas (ej. 19:00 - 20:00)', current ? current.hours : '')
      if (newHours != null) modifyHours(id, newHours)
    }} onDelete={deleteReservation} />
  }

  if (page === 'admin2-table') {
    if (!isAdmin) { setPage('landing'); return null }
    return <div style={{position:'fixed', inset:0, background:'white'}}>
      <div style={{padding:18}}>
        <button className="btn" onClick={() => setPage('admin2')}>Volver al Admin</button>
      </div>
      <div style={{padding:18}}>
        <Tabla reservations={reservations} onAccept={acceptReservation} onModify={(id) => {
          const current = reservations.find(r => r.id === id)
          const newHours = prompt('Modificar horas (ej. 19:00 - 20:00)', current ? current.hours : '')
          if (newHours != null) modifyHours(id, newHours)
        }} onReject={rejectReservation} onDelete={deleteReservation} onBack={() => setPage('dashboard')} onBackToChart={() => setPage('admin2')} />
      </div>
    </div>
  }

  if (page === 'reserve') {
    return <Reserve onBack={() => setPage('dashboard')} onHome={() => setPage('landing')} currentClient={currentClient} onCreateReservation={(data) => {
      const created = addReservation(data)
      alert('Reserva enviada: ' + created.client + ' — estado: ' + created.status)
    }} />
  }

  if (page === 'reservations') {
    return <Reservations onBack={() => setPage('dashboard')} onHome={() => setPage('landing')} reservations={reservations} currentClient={currentClient} />
  }

  if (page === 'payments') {
    return <Payments onBack={() => setPage('dashboard')} onHome={() => setPage('landing')} />
  }

  if (page === 'profile') {
    return <Profile onBack={() => setPage('dashboard')} onHome={() => setPage('landing')} />
  }

  // landing (default)
  return (
    <Landing onLogin={() => setPage('login')} onRegister={() => setPage('register')} />
  )
}
