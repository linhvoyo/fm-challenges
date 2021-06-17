import React from 'react';
import PropTypes from 'prop-types';
import GoogleMapReact from 'google-map-react';

import './IPMap.css';

const isDevMode = process.env.NODE_ENV === 'development';
const Location = () => <div className="pin" />;

function IPMap(props) {
  const zoom = 15;
  const { ips, ips: [ip] } = props;
  const { lat, lng } = ip;
  return (
    <div className="IPMap">
      <div style={{ height: '100%', width: '100%' }}>
        <GoogleMapReact
          bootstrapURLKeys={isDevMode ? null
            : { key: process.env.REACT_APP_MAP_API_KEY }}
          center={{ lat, lng }}
          defaultZoom={zoom}
          options={{ fullscreenControl: false, zoomControl: false }}
        >
          {ips.map((pin) => <Location key={pin.lat + pin.lng} lat={pin.lat} lng={pin.lng} />)}
        </GoogleMapReact>
      </div>
    </div>
  );
}

export default IPMap;

IPMap.propTypes = {
  ips: PropTypes.arrayOf(PropTypes.shape({
    lat: PropTypes.number.isRequired,
    lng: PropTypes.number.isRequired,
  })).isRequired,
};
