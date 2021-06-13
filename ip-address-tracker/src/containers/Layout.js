import React from 'react';

import IPMap from '../components/IPMap';
import SearchBar from '../components/SearchBar';
import DisplayIPInfo from '../components/DisplayIPInfo';

import { searchIp } from '../api';
import './Layout.css';

import desktopDesign from '../asset/design/desktop-design.jpg';

class Layout extends React.Component {
  constructor() {
    super();

    this.state = {
      query: '',
      ip: null,
    };
  }

  componentDidMount = async () => {
    // const ip = '24.48.0.1';
    // const ip = '98.37.137.65';
    this.setIp();
  }

  setIp = async (ip) => {
    const response = await searchIp(ip);
    if (response.status === 'fail') return alert(`An error has occured: ${response.message}\nPlease try again`);
    this.setState({ ip: response });
    return response;
  };

  onSearchHandler = (e, textInput) => {
    e.preventDefault();
    return this.setIp(textInput);
  }

  render() {
    console.log(this.state);
    const { ip } = this.state;
    return (
      <div className="Layout">
        <img id="desktop" src={desktopDesign} alt="desktop-design preview" />
        <div className="header">
          <span className="title">IP Address Tracker</span>
          <SearchBar onSearch={this.onSearchHandler} />
        </div>
        {!ip ? null
          : (
            <>
              <DisplayIPInfo ipQuery={ip} />
              <IPMap ips={[ip]} />
            </>
          )}
      </div>
    );
  }
}

export default Layout;
