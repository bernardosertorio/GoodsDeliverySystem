import React, { useState, useCallback } from 'react'
import { withRouter } from 'react-router-dom'
import PropTypes from 'prop-types'
import Geocode from 'react-geocode'
import { GoogleMap, DirectionsRenderer } from 'react-google-maps'
import MapStyles from './styles'

import api from '../../services/api'

Geocode.setApiKey(process.env.REACT_APP_GOOGLE_API)

function GoogleMaps({ match }) {

  const [ways, setWays] = useState('')

  const loadWays = useCallback( async () => { 

    const apiResponse = await api.get(`/register/${match.params.id}`)

    const { starting_journey, ending_journey } = apiResponse.data

    const startPoint = await Geocode.fromAddress(starting_journey)
    const { lat, lng } = startPoint.results[0].geometry.location 

    const endPoint = await Geocode.fromAddress(ending_journey)
    const { lat: latitude, lng: longitude } = endPoint.results[0].geometry.location 

    const waysService = new window.google.maps.DirectionsService()

    const beginningJourney = { lat, lng}
    const endingTrip = { lat: latitude, lng: longitude}

    waysService.route({

      beginningJourney,
      endingTrip,
      travelMode: window.google.maps.TravelMode.DRIVING

    },

    (result, status) => {

      if(status === window.google.maps.DirectionsStatus.OK) {
        setWays(result)
        console.log(result)

      } else {

        console.error(`error fetching directions ${result}`)

      }
      }
    )

  },[match.params.id])

  return (
    <GoogleMap
      value={loadWays}
      defaultZoom={10}
      defaultCenter={{ lat: -22.9035, lng: -43.2096 }}
      defaultOptions={{ styles: MapStyles }}
    >
      {match}
      <DirectionsRenderer ways={ways} />
    </GoogleMap>
  )
}

GoogleMaps.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string
    })
  }).isRequired
}

export default withRouter(GoogleMaps)



