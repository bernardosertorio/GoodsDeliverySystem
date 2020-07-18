import React from 'react'
import { FiLogIn } from 'react-icons/fi'

import './styles.css'


export default function OrderRecord() {
  return (
    <div className="orderRecord-container">
      <section className="form">
        <h1> Goods Delivery System </h1>

        <form>
          <h2>Delivery Record</h2>

          <input placeholder="Client's name" />
          <input placeholder="Delivery date" />
          <input placeholder="Starting point" />
          <input placeholder="Arrival point" />

          <button className="button" type="submit">Register order</button>

          <a href="/list">
            <FiLogIn size={16} color="#E02041" />
            List of delivery orders
          </a>

        </form>
      </section>

    </div>
  )
}