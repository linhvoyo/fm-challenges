import React from 'react';
import './App.css';

import IPMap from './components/IPMap';

class App extends React.Component {
  state = {
    IPS: [],
  }

  componentDidMount = async () => {
    // const ip = '24.48.0.1';
    const ip = '98.37.137.65';
    const location = await this.searchIp(ip);
    this.setState((prevState) => ({ IPS: [...prevState.IPS, location] }));
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
        {this.state.IPS.length ? <IPMap IPS={this.state.IPS}/> : null}
      </div>
    )
  }
};

export default App;
