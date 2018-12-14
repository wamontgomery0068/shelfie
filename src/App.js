import React, { Component } from 'react';
import Dashboard from './Components/Dashboard/Dashboard';
import Header from './Components/Header/Header';
import Form from './Components/Form/Form';

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App_Container">
        <Dashboard />
        <Header />
        <Form />
      </div>
    );
  }
}

export default App;
