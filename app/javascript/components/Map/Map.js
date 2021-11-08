import React, { useState } from 'react';
import ReactMapGL, {Marker, Popup} from 'react-map-gl';

import mapIcon from "../../images/location-pin.png"
import styled from 'styled-components';

const Img = styled.img`
  width: 32px;
`

const Map = () => {
  const [viewport, setViewport] = useState({
    latitude: -22.9413397,
    longitude: -43.2522413,
    width: "100%",
    height: 400,
    zoom: 14
  })

  const coordonate = [-22.9413397, -43.2522413]

  return (
    <ReactMapGL
    {...viewport}
    scrollZoom={false}
    mapboxApiAccessToken={process.env.MAPBOX_API_KEY}
    onViewportChange={(viewport) => setViewport(viewport)}
    mapStyle="mapbox://styles/will3685/ckvqslo8w0atv14kaxdj5ynrt"
  >
    <Marker
      latitude={coordonate[0]}
      longitude={coordonate[1]}
    >
      <Img src={mapIcon} alt="Consultório" />
    </Marker>
  </ReactMapGL>
  )
}

export default Map
