import React from 'react';
import { MapLayoutBackground } from '../Style';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';

const accessToken =
  'pk.eyJ1Ijoic2VsaXJhaCIsImEiOiJja29pZGMxNDgwanA1MndzMXRzNHU3bDhiIn0.LasnVwmbmnxUb9A0Co8vOA';

const MapLayout = () => {
  return (
    <MapLayoutBackground>
      <MapContainer center={[51.505, -0.09]} zoom={13} scrollWheelZoom={false}>
        <TileLayer
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url={`https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=${accessToken}`}
          maxZoom={18}
          id="mapbox/streets-v11"
          tileSize={512}
          zoomOffset={-1}
          accessToken="your.mapbox.access.token"
        />
        <Marker position={[51.505, -0.09]}>
          <Popup>
            A pretty CSS3 popup. <br /> Easily customizable.
          </Popup>
        </Marker>
      </MapContainer>
    </MapLayoutBackground>
  );
};

export { MapLayout };
