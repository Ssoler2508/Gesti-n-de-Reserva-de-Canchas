import React, { useEffect, useState } from 'react'
import './Profile.css'

export default function AdminUsers({ onBack }) {
  const [users, setUsers] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    async function load() {
      setLoading(true)
      setError(null)
      try {
        const token = localStorage.getItem('token')
        const res = await fetch('/api/usuarios', {
          headers: token ? { 'Authorization': `Bearer ${token}` } : {}
        })
        if (!res.ok) {
          const body = await res.json().catch(() => ({}))
          throw new Error(body.message || `Error ${res.status}`)
        }
        const data = await res.json()
        setUsers(data)
      } catch (err) {
        setError(err.message)
      } finally {
        setLoading(false)
      }
    }
    load()
  }, [])

  return (
    <div className="profile-page">
      <header className="profile-header">
        <button className="link-button" onClick={() => { if (typeof onBack === 'function') onBack() }}>Volver</button>
        <h2>Administración — Usuarios</h2>
      </header>

      <main className="profile-main">
        {loading && <p>Cargando usuarios...</p>}
        {error && <p style={{ color: 'red' }}>Error: {error}</p>}

        {!loading && !error && (
          <table style={{ width: '100%', borderCollapse: 'collapse' }}>
            <thead>
              <tr>
                <th style={{ textAlign: 'left', padding: 8 }}>ID</th>
                <th style={{ textAlign: 'left', padding: 8 }}>Nombre</th>
                <th style={{ textAlign: 'left', padding: 8 }}>Email</th>
                <th style={{ textAlign: 'left', padding: 8 }}>Rol</th>
                <th style={{ textAlign: 'left', padding: 8 }}>Teléfono</th>
              </tr>
            </thead>
            <tbody>
              {users.map(u => (
                <tr key={u.id} style={{ borderTop: '1px solid #ddd' }}>
                  <td style={{ padding: 8 }}>{u.id}</td>
                  <td style={{ padding: 8 }}>{u.name}</td>
                  <td style={{ padding: 8 }}>{u.email}</td>
                  <td style={{ padding: 8 }}>{u.role}</td>
                  <td style={{ padding: 8 }}>{u.phone || '-'}</td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </main>
    </div>
  )
}
