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
  const parseIP = (ip) => ({
    'ip address': ip.query,
    location: `${ip.city}, ${ip.region} ${ip.zip}`,
    timezone: ip.timezone,
    isp: ip.isp,
  });
  const ipData = parseIP(ipQuery);
  // const ipData = {
  //   'ip address': '192.212.174.101',
  //   location: 'Brooklyn, NY 10001',
  //   timezone: 'UTC -05:00',
  //   isp: 'SpaceX Starlink',
  // };

  // ipData.timezone = 'UTC -05:00';
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
  }).isRequired,

};
