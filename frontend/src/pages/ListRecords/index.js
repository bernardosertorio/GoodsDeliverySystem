import React, { useState, useEffect, useMemo } from 'react'
import { Link } from 'react-router-dom'
import { parseISO, format } from 'date-fns'

import api from '../../services/api'

import './styles.css'



export default function ListRecords() {

  const [records, setRecords] = useState([])
  const [page, setPage] = useState([1])
  
  async function loadRecords(page = 1) {

    const response = await api.get('/listrecords', {
      params: {
        page
      }
    })
      
    const date = response.data.map(record => ({
      ...record,
      dateFormatted: format(parseISO(record.date), "dd'/'M/Y")
    }))

    setRecords(date)
    setPage(page)

  }

  useEffect(() => {
    loadRecords()
  }, [])

  const recordSize = useMemo(() => records.length, [records])

  function previousPage() {
    if(page === 1) return;
    const pageNumber = page - 1;
    loadRecords(pageNumber)
  }

  function nextPage() {
    if(recordSize < 10) return;
    const pageNumber = page + 1;
    loadRecords(pageNumber)
  }
  


  return (

    <div className="listrecords-container">

      <header>
        <h1>Delivery list</h1>
        <Link className="button" to="/"> Register New </Link>
      </header>

      {records.map(deliveryuser => (

        <ul key={deliveryuser.id}>
          <li>
          <h2>Delivery Record Number</h2>
          <p>#00{deliveryuser.id}</p>

          <strong>Delivery Customer Name</strong>
          <p>{deliveryuser.name}</p>

          <strong>Delivery Date</strong>
          <p>{deliveryuser.dateFormatted}</p>

          <strong>Initial Location</strong>
          <p>{deliveryuser.starting_journey}</p>

          <strong>Final Location</strong>
          <p>{deliveryuser.ending_journey}</p>

          <Link className="button" to={`/listrecords/${deliveryuser.id}`}>Details</Link>
          </li>
        </ul>

      ))}

      <pageactions>  
        <button type="button" disabled={page < 2} onClick={previousPage}> Previous Page </button>
        <span>Page {page}</span>
        <button type="button" disabled={recordSize < 10} onClick={nextPage}> Next Page</button>
      </pageactions>

    </div>  
  )
}