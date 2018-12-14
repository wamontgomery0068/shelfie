import React, { Component } from 'react';
import Header from './Components/Header/Header';
import Dashboard from './Components/Dashboard/Dashboard';
import Form from './Components/Form/Form';

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App_Container">
        <Header />
        <Dashboard />
      </div>
    );
  }
}

export default App;
