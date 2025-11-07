import React from 'react'
import './App.css'

export default function Login({ onBack }) {
  function handleSubmit(e) {
    e.preventDefault()
    // placeholder behavior: just show an alert; in a real app you'd call the API
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

        <p className="login-register">¿No Tienes Cuenta? <a href="#" onClick={(e)=>{e.preventDefault(); alert('Aquí podrías ir a registro')}}>Registrarse</a></p>
      </main>

      <footer className="login-footer" />
    </div>
  )
}
