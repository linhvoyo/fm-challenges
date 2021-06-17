import React from 'react';
import PropTypes from 'prop-types';
import GoogleMapReact from 'google-map-react';

import './IPMap.css';

const { NODE_ENV } = process.env;

const Location = () => <div className="pin" />;

function IPMap(props) {
  const zoom = 15;
  const { ips: [ip] } = props;
  const { lat, lon: lng } = ip;
  return (
    <div className="IPMap">
      <div style={{ height: '100%', width: '100%' }}>
        <GoogleMapReact
          bootstrapURLKeys={NODE_ENV === 'development' ? null
            : { key: process.env.REACT_APP_MAP_API_KEY }}
          center={{ lat, lng }}
          defaultZoom={zoom}
          options={{ fullscreenControl: false, zoomControl: false }}
        >
          <Location lat={lat} lng={lng} />
        </GoogleMapReact>
      </div>
    </div>
  );
}

export default IPMap;

IPMap.propTypes = {
  ips: PropTypes.arrayOf(PropTypes.shape({
    lat: PropTypes.number.isRequired,
    lon: PropTypes.number.isRequired,
  })).isRequired,
};
