import React from 'react';
import PropTypes from 'prop-types';

import './DisplayIPInfo.css';

const IPInfo = ({ header, data }) => (
  <div className="ipInfo">
    <span className="title">{header}</span>
    <span className="content">{data}</span>
  </div>
);

const DisplayIPInfo = ({ ipQuery }) => {
  const parseIP = (ip) => {
    const mins = ip.offset / 60;
    const hourOffset = Math.floor(Math.abs(mins / 60)).toString().padStart(2, '0');
    const minOffset = Math.abs(mins % 60).toString().padStart(2, '0');
    const sign = mins < 0 ? '-' : '';

    return {
      'ip address': ip.query,
      location: `${ip.city}, ${ip.region} ${ip.zip}`,
      timezone: `UTC ${sign}${hourOffset}:${minOffset}`,
      isp: ip.isp,
    };
  };
  const ipData = parseIP(ipQuery);
  // parseIP(ipQuery);
  // const ipData = {
  //   'ip address': '192.212.174.101',
  //   location: 'Brooklyn, NY 10001',
  //   timezone: 'UTC -05:00',
  //   isp: 'SpaceX Starlink',
  // };
  return (
    <div className="DisplayIPInfo">
      {Object.keys(ipData).map((ip) => <IPInfo key={ip} header={ip} data={ipData[ip]} />)}
    </div>
  );
};

export default DisplayIPInfo;

IPInfo.propTypes = {
  header: PropTypes.string.isRequired,
  data: PropTypes.string.isRequired,
};

DisplayIPInfo.propTypes = {
  ipQuery: PropTypes.shape({
    query: PropTypes.string.isRequired,
    city: PropTypes.string.isRequired,
    region: PropTypes.string.isRequired,
    zip: PropTypes.string.isRequired,
    offset: PropTypes.number.isRequired,
  }).isRequired,

};
