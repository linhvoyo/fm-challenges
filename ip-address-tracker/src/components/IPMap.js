import React from 'react';
import PropTypes from 'prop-types';
import GoogleMapReact from 'google-map-react';

import './IPMap.css';

const { NODE_ENV } = process.env;

const Location = () => <div className="pin" />;

function IPMap(props) {
  const zoom = 15;
  const { ips: [ip] } = props;
  const { latitude, longitude } = ip;
  return (
    <div className="IPMap">
      <div style={{ height: '100%', width: '100%' }}>
        <GoogleMapReact
          bootstrapURLKeys={NODE_ENV === 'development' ? null
            : { key: process.env.REACT_APP_MAP_API_KEY }}
          center={{ lat: Number(latitude), lng: Number(longitude) }}
          defaultZoom={zoom}
          options={{ fullscreenControl: false, zoomControl: false }}
        >
          <Location lat={Number(latitude)} lng={Number(longitude)} />
        </GoogleMapReact>
      </div>
    </div>
  );
}

export default IPMap;

IPMap.propTypes = {
  ips: PropTypes.arrayOf(PropTypes.shape({
    latitude: PropTypes.string.isRequired,
    longitude: PropTypes.string.isRequired,
  })).isRequired,
};
