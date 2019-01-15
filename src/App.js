import React, { Component } from 'react';
import './resources/styles.css';
import Header from './components/header_footer/Header';
import Featured from './components/featured';
import VenueInfo from "./components/VenueInfo";
import Highlights from "./components/Highlights";
import Prices from "./components/prices";

class App extends Component {
  render() {
    return (
      <div className="App" style={{ height:"1500px" }}>
        <Header />
        <Featured/>
        <VenueInfo />
        <Highlights />
        <Prices />
      </div>
    );
  }
}

export default App;
