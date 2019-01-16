import React, { Component } from 'react';
import './resources/styles.css';
import Header from './components/header_footer/Header';
import Featured from './components/featured';
import VenueInfo from "./components/VenueInfo";
import Highlights from "./components/Highlights";
import Prices from "./components/prices";
import Location from "./components/Location";
import Footer from "./components/header_footer/Footer";

class App extends Component {
  render() {
    return (
      <div className="App" style={{ height:"1500px" }}>
        <Header />
        <Featured/>
        <VenueInfo />
        <Highlights />
        <Prices />
        <Location />
        <Footer />
      </div>
    );
  }
}

export default App;
