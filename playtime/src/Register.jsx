import React from 'react'
import './Register.css'

export default function Register({ onSuccess, onLogin }) {
  function handleSubmit(e) {
    e.preventDefault()
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
        <div className="register-container">
          <aside className="register-side">
            <div className="side-card">
              <h3>¿Ya tienes cuenta?</h3>
              <p>Inicia sesión para continuar con tus reservas.</p>
              <button className="side-btn" type="button" onClick={() => { if (typeof onLogin === 'function') onLogin() }}>Iniciar Sesión</button>
            </div>
          </aside>

          <section className="register-form-wrapper">
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
                <span className="label">Código de Verificación</span>
                <input name="code" type="text" />
              </label>

              <div style={{height:18}} />

              <div style={{display:'flex', justifyContent:'center'}}>
                <button className="btn register-submit" type="submit">Registrar</button>
              </div>
            </form>
          </section>
        </div>
      </main>

      <footer className="login-footer" />
    </div>
  )
}
