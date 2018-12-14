import React, { Component } from 'react';
import { BrowserRouter } from "react-router-dom";
import routes from "./routes";
import Header from './Components/Header/Header';

import './App.css';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App_Container">
          <Header />
          {routes}
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
