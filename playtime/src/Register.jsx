import React from 'react'
import './Register.css'

export default function Register({ onBack, onSuccess }) {
  function handleSubmit(e) {
    e.preventDefault()
    // In a real app you'd send the data to backend. Call onSuccess to navigate.
    if (typeof onSuccess === 'function') {
      onSuccess()
      return
    }
    alert('Simulación de registro (sin backend).')
  }

  return (
    <div className="register-page">
      <div className="register-top-left">
        <img src="/logo play 1.png" alt="PlayTime" />
        <div className="register-brand"></div>
      </div>

      <main className="register-main">
        <h2>Registrarse</h2>

  <form className="register-form" onSubmit={handleSubmit}>
          <label>
            <span className="label">Email</span>
            <input name="email" type="email" required />
          </label>

          <label>
            <span className="label">Contraseña</span>
            <input name="password" type="password" required />
          </label>

          <label>
            <span className="label">Codigo de Verificación</span>
            <input name="code" type="text" />
          </label>

          <div style={{height:18}} />

          <div style={{display:'flex', justifyContent:'center'}}>
            <button className="btn register-submit" type="submit">Registrar</button>
          </div>
        </form>
      </main>

      <footer className="login-footer" />
    </div>
  )
}
