import React from 'react';
import './App.css';

import IPMap from './components/IPMap';

class App extends React.Component {

  componentDidMount = async () => {
    const ip = '24.48.0.1';
    const location = await this.searchIp(ip);
    console.log(location);
    console.log(process.env.IP_TRACKER_KEY)
  }

  searchIp = async (ip) => {
    const api = 'http://ip-api.com/json';
    return fetch(`${api}/${ip}`)
      .then(response => response.json());
  }

  render() {
    return (
      <div className="App">
        <input></input>
        <IPMap />
      </div>
    )
  }
};

export default App;
