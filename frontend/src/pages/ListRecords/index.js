import React from 'react'
import { Link } from 'react-router-dom'

import './styles.css'

export default function ListRecords() {
  return (
    <div className="listrecords-container">
      <header>
        <h1>Delivery list</h1>
        <Link className="button" to="/">Register New </Link>
      </header>

      <ul>
        <li>
          <h2>Delivery Record Number</h2>
          <p>00003</p>

          <strong>Delivery Customer Name</strong>
          <p>Bernardo</p>

          <strong>Delivery Date</strong>
          <p>21/08/1987</p>

          <strong>Initial Location</strong>
          <p>Copacaban</p>

          <strong>Final Location</strong>
          <p>Copacaban</p>

          <Link className="button" to="/">Details</Link>
        </li>

        <li>
          <h2>Delivery Record Number</h2>
          <p>00003</p>

          <strong>Delivery Customer Name</strong>
          <p>Bernardo</p>

          <strong>Delivery Date</strong>
          <p>21/08/1987</p>

          <strong>Initial Location</strong>
          <p>Copacaban</p>

          <strong>Final Location</strong>
          <p>Copacaban</p>

          <Link className="button" to="/">Details</Link>
        </li>

        <li>
          <h2>Delivery Record Number</h2>
          <p>00003</p>

          <strong>Delivery Customer Name</strong>
          <p>Bernardo</p>

          <strong>Delivery Date</strong>
          <p>21/08/1987</p>

          <strong>Initial Location</strong>
          <p>Copacaban</p>

          <strong>Final Location</strong>
          <p>Copacaban</p>

          <Link className="button" to="/">Details</Link>
        </li>
      </ul>

      <pageactions>
        
        <button type="button">
         Previous Page
        </button>

        <button type="button">
          Next Page
        </button>
      </pageactions>

    </div>  
  )
}