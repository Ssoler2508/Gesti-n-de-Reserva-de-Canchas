import React from 'react'
import './Payments.css'

export default function Payments({ onBack }) {
  const payments = [
    { date: '4 - 11 - 2025', method: 'Tarjeta de Credito', amount: '$80.000 COP' },
    { date: '10 - 11 - 2025', method: 'Tarjeta de Credito', amount: '$60.000 COP' }
  ]

  return (
    <div className="payments-page">
      <div className="payments-top-left">
        <img src="/logo play 1.png" alt="PlayTime" />
      </div>

      <main className="payments-main">
        <h1>Pagos que has realizado
          <br />con PlayTime</h1>

        <h2 className="payments-user">Pedro Ospina</h2>

        <table className="payments-table">
          <thead>
            <tr>
              <th>Fecha de Pago</th>
              <th>Metodo de Pago</th>
              <th>Monto</th>
            </tr>
          </thead>
          <tbody>
            {payments.map((p, i) => (
              <tr key={i}>
                <td>{p.date}</td>
                <td>{p.method}</td>
                <td>{p.amount}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </main>

      <footer className="payments-footer">
        <button className="home-btn" aria-label="Inicio" onClick={onBack}>🏠</button>
      </footer>
    </div>
  )
}
