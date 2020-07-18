import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import OrderRecord from './pages/OrderRecord'
import ListRecords from './pages/ListRecords'

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={OrderRecord} />
        <Route path="/listrecords" component={ListRecords} />
      </Switch>
    </BrowserRouter>
  )
}