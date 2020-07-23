import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import OrderRecord from './pages/OrderRecord'
import ShowMapRegister from './pages/ShowMapRegister'
import ListRecords from './pages/ListRecords'

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={OrderRecord} />
        <Route path="/listrecords" component={ListRecords} />
        <Route path="/deliveries/:id" component={ShowMapRegister} />
      </Switch>
    </BrowserRouter>
  )
}