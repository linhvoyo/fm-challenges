import './DisplayIPInfo.css';

const IPInfo = ({ header, data }) => <div className="ipInfo">
  <span>{header}</span>
  <span>{data}</span>
</div>

function DisplayIPInfo(props) {
  const { ip } = props;
  const parseIP = (ip) => {
    return {
      'ip address': ip.query,
      location: `${ip.city}, ${ip.region} ${ip.zip}`,
      timezone: ip.timezone,
      isp: ip.isp,
    }
  }
  const ipData = parseIP(ip);

  return <div className="DisplayIPInfo">
    {Object.keys(ipData).map((ip) => <IPInfo key={ip} header={ip} data={ipData[ip]} />)}
  </div>
}
export default DisplayIPInfo;
