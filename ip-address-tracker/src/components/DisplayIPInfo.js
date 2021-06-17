import React from 'react';
import PropTypes from 'prop-types';
import moment from 'moment-timezone';

import './DisplayIPInfo.css';

const IPInfo = ({ header, data }) => (
  <div className="ipInfo flex-by-column">
    <span className="ipInfo__title">{header}</span>
    <span className="ipInfo__content">{data}</span>
  </div>
);

const DisplayIPInfo = (props) => {
  const {
    ip,
    city,
    state,
    zipcode,
    isp,
    region,
  } = props;

  const ipData = {
    'ip address': ip,
    location: `${city}, ${state} ${zipcode}`,
    timezone: `UTC ${moment.tz(region).format('Z')}`,
    isp,
  };

  return (
    <div className="DisplayIPInfo--position">
      <div className="DisplayIPInfo">
        {Object.keys(ipData).map((key) => <IPInfo key={key} header={key} data={ipData[key]} />)}
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
  ip: PropTypes.string.isRequired,
  city: PropTypes.string.isRequired,
  state: PropTypes.string.isRequired,
  zipcode: PropTypes.string.isRequired,
  isp: PropTypes.string.isRequired,
  region: PropTypes.string.isRequired,
};
