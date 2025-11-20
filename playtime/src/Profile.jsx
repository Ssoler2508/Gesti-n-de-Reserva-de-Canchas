import React from 'react'
import './Profile.css'
import HomeButton from './components/HomeButton'

export default function Profile({ onBack, onHome }) {
  function handleUpdate(e) {
    e.preventDefault()
    alert('Simulación: información actualizada (sin backend).')
    if (typeof onBack === 'function') onBack()
  }

  return (
    <div className="profile-page">
      <div className="profile-top-left">
        <img src="/logo play 1.png" alt="PlayTime" />
      </div>

      <main className="profile-main">
        <h1>Actualiza Tu informacion</h1>

        <form className="profile-form" onSubmit={handleUpdate}>
          <label>
            <span className="label">Nuevo Email</span>
            <input name="email" type="email" />
          </label>

          <label>
            <span className="label">Nueva Contraseña</span>
            <input name="password" type="password" />
          </label>

          <label>
            <span className="label">Codigo de Verificación</span>
            <input name="code" type="text" />
          </label>

          <div style={{height:20}} />

          <div style={{display:'flex', justifyContent:'center'}}>
            <button className="btn profile-submit" type="submit">Actualizar</button>
          </div>
        </form>
      </main>

      <footer className="profile-footer">
        <HomeButton onClick={() => { if (typeof onBack === 'function') onBack(); else if (typeof onHome === 'function') onHome(); }} />
      </footer>
    </div>
  )
}
