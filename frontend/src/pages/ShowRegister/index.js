import React from 'react'
import { withScriptjs, withGoogleMap } from 'react-google-maps'

const WrapperMap = withScriptjs(withGoogleMap(Map))

export default function UserMapWay() {
  return (
    <div style={{width: `100vw`, height:`100vh`}}>
      <WrapperMap
      googleMapURL={`https://maps.googleapis.com/maps/api/js?=${process.env.REACT_APP_GOOGLE_API}`}
      loadingElement={<div style={{ height: `100%` }} />}
      containerElement={<div style={{ height: `100%` }} />}
      mapElement={<div style={{ height: `100%` }} />}
      />
    </div>
  )
}
