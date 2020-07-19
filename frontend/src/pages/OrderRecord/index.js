import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { FiLogIn } from 'react-icons/fi'
import { toast } from 'react-toastify'
import * as Yup from 'yup'
import DateConfig from '../../components/DateConfig'
import PropTypes from 'prop-types'

import api from '../../services/api'

import './styles.css'

const schema = Yup.object().shape({
  name: Yup.string().required(),
  date: Yup.date().required(),
  starting_journey: Yup.string().required(),
  ending_journey: Yup.string().required(),
});


export default function OrderRecord({history}) {

  const [start, setStart] = useState('')
  const [end, setEnd] = useState('')

  async function handleRegister(e, data) {
    e.preventDefault()

    try {
      await api.post('/', {
        name: data.name,
        date: data.date,
        starting_journey: start,
        ending_journey: end,
      })
      history.pushState('/listrecords')
    } catch (err) {
     toast.error(
       'Registration error! Check your data.'
     )
     console.log(err) 
    }
  }

  return (
    <div className="orderRecord-container">
      <section className="form">
        <h1> Goods Delivery System </h1>

        <form onSubmit={handleRegister} schema={schema}>
          <h2>Delivery Record</h2>

          <input type="text" name="name" placeholder="Client's name" />
          <input placeholder="Delivery date"><DateConfig name="date" /></input>
          <input placeholder="Starting point" />
          <input placeholder="Arrival point" />

          <Link to="/listrecords" className="button" type="submit">Register Delivery</Link>

          <Link to="/listrecords">
            <FiLogIn size={16} color="#E02041" />
            List of delivery orders
          </Link>

        </form>
      </section>

    </div>
  )
}