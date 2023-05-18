import React from 'react'
import '../home/home.css'
import Me from '../../img/me.png'


const Servicios = () => {
  return (
    <div className='me'>
      <div>
        <div className='yo'>
             <img src={Me} alt="yo" className='mine' />
        </div>

      </div>
      <div className='text-me'>
        <h1 style={{fontSize: "3rem"}}>Charly</h1><br />
        <p style={{fontSize: "1.2rem", marginTop: "1.5rem"}}>Es tu asistente contable, el cual te ayudara a gestionar de manera más fácil y sencilla tu empresa.

Contamos con herramientas de facturacion,Inventario, CRM, clientes y mesa de ayuda, con el objetivo de brindar al cliente todas las comodidades e implementarlas dentro de esta gran plataforma.</p>
      </div>
    </div>
  )
}

export default Servicios