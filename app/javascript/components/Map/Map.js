import React from 'react';
import ReactMapGL, {Marker, Popup} from 'react-map-gl';

const Map = () => {
  const viewport = ({
    latitude: -22.9831351,
    longitude: -43.2055487,
    width: "100%",
    height: 500,
    zoom: 12
  })

  return (
    <ReactMapGL
    {...viewport}
    mapboxApiAccessToken={process.env.MAPBOX_API_KEY}
    onViewportChange={(viewport) => setViewport(viewport)}
    mapStyle="mapbox://styles/mapbox/streets-v11"
  ></ReactMapGL>
  )
}

export default Map