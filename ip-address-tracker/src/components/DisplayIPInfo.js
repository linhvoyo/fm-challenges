import React from 'react';
import PropTypes from 'prop-types';
import moment from 'moment-timezone';

import './DisplayIPInfo.css';
import getStateAbbreviation from '../utils/getStateAbbreviation';

const IPInfo = ({ header, data }) => (
  <div className="ipInfo flex-by-column">
    <span className="ipInfo__title">{header}</span>
    <span className="ipInfo__content">{data}</span>
  </div>
);

const DisplayIPInfo = ({ ipQuery }) => {
  const parseIP = (ip) => ({
    'ip address': ip.ip,
    location: `${ip.city}, ${getStateAbbreviation(ip.state_prov)} ${ip.zipcode}`,
    timezone: `UTC ${moment.tz(ip.time_zone.name).format('Z')}`,
    isp: ip.isp,
  });

  const ipData = parseIP(ipQuery);
  return (
    <div className="DisplayIPInfo--position">
      <div className="DisplayIPInfo">
        {Object.keys(ipData).map((ip) => <IPInfo key={ip} header={ip} data={ipData[ip]} />)}
      </div>
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
    city: PropTypes.string.isRequired,
    state_prov: PropTypes.string.isRequired,
    zipcode: PropTypes.string.isRequired,
    time_zone: PropTypes.shape({
      offset: PropTypes.number.isRequired,
    }),
    isp: PropTypes.string.isRequired,
  }).isRequired,

};
