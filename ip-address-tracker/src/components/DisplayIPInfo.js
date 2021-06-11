import React from 'react';
import PropTypes from 'prop-types';

import './DisplayIPInfo.css';

const IPInfo = ({ header, data }) => (
  <div className="ipInfo">
    <span>{header}</span>
    <span>{data}</span>
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
