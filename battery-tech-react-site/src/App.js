// import logo from './logo.svg';
import './App.css';

import React from 'react';
// import MyComponent from './MyComponent'; // Adjust the path as necessary
import LandingPageHeader from './components/front_page/LandingPageHeader';
import BatteryGraphic from './components/cards/battery_card/BatteryGraphic';

function App() {
  return (
    <div className="App">
      <LandingPageHeader />
      <BatteryGraphic />
    </div>

  );
}

export default App;
