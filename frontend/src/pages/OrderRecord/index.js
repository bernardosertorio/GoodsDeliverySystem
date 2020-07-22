import React, { useState } from 'react'
import { withRouter, Link } from 'react-router-dom'
import { Form, Input } from '@rocketseat/unform'
import { FiLogIn } from 'react-icons/fi'
import { toast } from 'react-toastify'
import * as Yup from 'yup'
import PropTypes from 'prop-types'
import 'react-datepicker/dist/react-datepicker.css'
import PlacesComplete from '../../components/PlacesComplete'
import DateConfig from '../../components/DateConfig'

import api from '../../services/api'

import './styles.css'

const schema = Yup.object().shape({
  name: Yup.string().required(),
  date: Yup.date().required(),
  starting_journey: Yup.string().required(),
  ending_journey: Yup.string().required(),
});


function OrderRecord({history}) {

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
      history.push('/listrecords')
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

        <Form onSubmit={handleRegister} schema={schema}>
          <h2>Delivery Record</h2>

          <Input type="text" name="name" placeholder="Client's name" />
          <DateConfig name="date" />
          <PlacesComplete
            onChange={setStart}
            value={start}
            onSelect={data => setStart(data)}
            name={start}
            placeholder="Starting point" 
          />
          <PlacesComplete
            onChange={setEnd}
            value={end}
            onSelect={data => setEnd(data)}
            name={end}
            placeholder="Arrival point" 
          />

          <button className="button" type="submit">Register Delivery</button> 

        </Form>

        <Link to="/listrecords">
            <FiLogIn size={16} color="#E02041" />
            List of delivery orders
          </Link>

      </section>
    </div>
  )
}

  OrderRecord.propTypes = {
    history: PropTypes.shape({
      push: PropTypes.func,
    }).isRequired,  
  }

  export default withRouter(OrderRecord)

