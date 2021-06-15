const searchIp = async (ip) => {
  /* Search for IPv4/IPv6 address. If ip not supplied the current IP address will be used */
  const api = 'http://ip-api.com/json';
  const fields = [
    'as',
    'city',
    'country',
    'countryCode',
    'isp',
    'lat',
    'lon',
    'message',
    'org',
    'query',
    'region',
    'regionName',
    'status',
    'timezone',
    'offset',
    'zip',
  ];

  return fetch(`${api}/${ip || ''}?fields=${fields.join(',')}`)
    .then((response) => response.json());
};

module.exports = {
  searchIp,
};
