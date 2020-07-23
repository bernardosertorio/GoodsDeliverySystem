import React from 'react'
import { withScriptjs, withGoogleMap } from 'react-google-maps'
import { Link } from 'react-router-dom'
import Map from '../../components/GoogleMap'
 
const WrapperMap = withScriptjs(withGoogleMap(Map))

export default function UserMapWay() {
  return (
    <>

      <header>
            <h1>Router Map</h1>
            <Link className="button" to="/listrecords"> Back </Link>
      </header>

      <div style={{width: `50vw`, height:`50vh`}}>

        <WrapperMap
        googleMapURL={`https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=${process.env.REACT_APP_GOOGLE_API}`}
        loadingElement={<div style={{ height: `60%` }} />}
        containerElement={<div style={{ height: `60%` }} />}
        mapElement={<div style={{ height: `80%` }} />}
        />

      </div>

    </>
  )
}


