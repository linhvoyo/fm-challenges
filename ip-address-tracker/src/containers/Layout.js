import React from 'react';

import IPMap from '../components/IPMap';
import SearchBar from '../components/SearchBar';
import DisplayIPInfo from '../components/DisplayIPInfo';

import { searchIp } from '../api';
import getStateAbbreviation from '../utils/getStateAbbreviation';
import './Layout.css';

class Layout extends React.Component {
  constructor() {
    super();

    this.state = { ip: null };
  }

  componentDidMount = async () => {
    this.setIp();
  }

  setIp = async (ip) => {
    const response = await searchIp(ip);
    const resJson = await response.json();
    // eslint-disable-next-line no-alert
    if (response.status !== 200) return alert(`An error has occured: ${resJson.message}\n\nPlease try again`);
    this.setState({ ip: resJson });
    return response;
  };

  onSearchHandler = (e, textInput) => {
    e.preventDefault();
    return this.setIp(textInput);
  }

  render() {
    const { ip } = this.state;
    return (
      <div className="Layout flex-by-column">
        <div className="header flex-by-column">
          <span className="title">IP Address Tracker</span>
          <SearchBar onSearch={this.onSearchHandler} />
        </div>
        {!ip ? null
          : (
            <>
              <DisplayIPInfo
                ip={ip.ip}
                city={ip.city}
                state={getStateAbbreviation(ip.state_prov)}
                zipcode={ip.zipcode}
                isp={ip.isp}
                region={ip.time_zone.name}
              />
              <IPMap ips={[{ lat: Number(ip.latitude), lng: Number(ip.longitude) }]} />
            </>
          )}
      </div>
    );
  }
}

export default Layout;
