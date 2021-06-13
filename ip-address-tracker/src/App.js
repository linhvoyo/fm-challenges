import React from 'react';

import './App.css';
import IPMap from './components/IPMap';
import SearchBar from './components/SearchBar';
import DisplayIPInfo from './components/DisplayIPInfo';

import { searchIp } from './api';

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      query: '',
      ip: null,
    };
  }

  componentDidMount = async () => {
    // const ip = '24.48.0.1';
    const ip = '98.37.137.65';

    this.setIp(ip);
  }

  setIp = async (ip) => {
    const response = await searchIp(ip);
    if (response.status === 'fail') return alert('Entered address is invalid please try again');
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
      <div className="App">
        <SearchBar onSearch={this.onSearchHandler} />
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

export default App;
