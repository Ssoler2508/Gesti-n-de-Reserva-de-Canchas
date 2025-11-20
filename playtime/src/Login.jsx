import React from 'react'
import './App.css'

export default function Login({ onBack, onRegister, onSuccess }) {
  function handleSubmit(e) {
    e.preventDefault()
    if (typeof onSuccess === 'function') {
      onSuccess()
      return
    }
    alert('Simulación de inicio de sesión (no hay backend).')
  }

  return (
    <div className="login-page">
      <header className="login-header">
        <img src="/logo play 1.png" alt="PlayTime" className="login-top-logo" />
      </header>

      <main className="login-main">
        <h2>Iniciar Sesión</h2>

  <form className="login-form" onSubmit={handleSubmit}>
          <label>
            <span className="label">Email</span>
            <input name="email" type="email" required />
          </label>

          <label>
            <span className="label">Contraseña</span>
            <input name="password" type="password" required />
          </label>

          <button className="btn login-submit" type="submit">Ingresar</button>
        </form>

  <p className="login-register">¿No Tienes Cuenta? <button className="link-button" onClick={(e)=>{e.preventDefault(); if(typeof onRegister==='function') onRegister(); else alert('Ir a registro')}}>Registrarse</button></p>
      </main>

      <footer className="login-footer" />
    </div>
  )
}
