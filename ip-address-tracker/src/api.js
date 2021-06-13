const searchIp = async (ip) => {
  /* Search for IPv4/IPv6 address. If ip not supplied the current IP address will be used */
  const api = 'http://ip-api.com/json';
  return fetch(`${api}/${ip || ''}`)
    .then((response) => response.json());
};

module.exports = {
  searchIp,
};
