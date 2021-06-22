// eslint-disable-next-line import/prefer-default-export
export async function searchIp(ip) {
  /* Search for IPv4/IPv6 address. If ip not supplied the current IP address will be used */
  const api = 'https://api.ipgeolocation.io/ipgeo?';
  const params = new URLSearchParams();
  params.set('apiKey', process.env.REACT_APP_IP_GEO_KEY);
  params.set('ip', ip || '');
  return fetch(`${api}${params.toString()}`).then((response) => response);
}
