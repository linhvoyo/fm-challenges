import React from 'react';
import PropTypes from 'prop-types';
import GoogleMapReact from 'google-map-react';

import './IPMap.css';

const Location = ({ text }) => (
  <div className="LocationPin">
    <div className="pin" />
    <span>{text}</span>
  </div>
);

function IPMap(props) {
  // const center = {
  //   lat: 59.95,
  //   lng: 30.33,
  // };
  // const center = {
  //   lat: 37.3372,
  //   lng: -121.798,
  // };

  console.log(props);
  const zoom = 15;
  const { ips: [ip] } = props;
  const { lat, lon: lng, query } = ip;
  return (
    <div className="IPMap">
      <div style={{ height: '100%', width: '100%' }}>
        <GoogleMapReact
          center={{ lat, lng }}
          defaultZoom={zoom}
        >
          <Location lat={lat} lng={lng} text={query} />
        </GoogleMapReact>
      </div>
    </div>
  );
}

export default IPMap;

Location.propTypes = {
  text: PropTypes.string.isRequired,
};

IPMap.propTypes = {
  ips: PropTypes.arrayOf(PropTypes.shape({
    lat: PropTypes.number.isRequired,
    lon: PropTypes.number.isRequired,
  })).isRequired,
};
