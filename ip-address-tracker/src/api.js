const searchIp = async (ip) => {
  const api = 'http://ip-api.com/json';
  return fetch(`${api}/${ip}`)
    .then((response) => response.json());
};

module.exports = {
  searchIp,
};
