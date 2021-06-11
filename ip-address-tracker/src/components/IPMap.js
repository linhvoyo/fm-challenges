import React from 'react';
import PropTypes from 'prop-types';
import GoogleMapReact from 'google-map-react';

const Location = ({ text }) => <div>{text}</div>;

function IPMap(props) {
  // const center = {
  //   lat: 59.95,
  //   lng: 30.33,
  // };
  // const center = {
  //   lat: 37.3372,
  //   lng: -121.798,
  // };

  const zoom = 13;
  const { IPS: [ip] } = props;
  const { lat, lon: lng, query } = ip;
  return (
    <div style={{ height: '100vh', width: '100%' }}>
      <GoogleMapReact
        defaultCenter={{ lat, lng }}
        defaultZoom={zoom}
      >
        <Location lat={lat} lng={lng} text={query} />
      </GoogleMapReact>
    </div>
  );
}

export default IPMap;

Location.propTypes = {
  text: PropTypes.string.isRequired,
};

IPMap.propTypes = {
  IPS: PropTypes.arrayOf({
    ip: PropTypes.shape({
      lat: PropTypes.number.isRequired,
      lon: PropTypes.number.isRequired,
    }),
  }).isRequired,
};
