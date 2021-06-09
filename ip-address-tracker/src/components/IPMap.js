import GoogleMapReact from 'google-map-react';

function IPMap(props) {
  const center = {
    lat: 59.95,
    lng: 30.33,
  };
  const zoom = 11;

  return (
    <div style={{ height: '100vh', width: '100%' }}>
      <GoogleMapReact
        center={center}
        defaultCenter={center}
        defaultZoom={zoom}
      >
      </GoogleMapReact>
    </div>
  )
}

export default IPMap;
