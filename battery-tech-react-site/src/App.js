// import logo from './logo.svg';
import './App.css';

import React from 'react';
// import MyComponent from './MyComponent'; // Adjust the path as necessary
import LandingPageHeader from './components/front_page/LandingPageHeader';
import BatteryGraphic from './components/cards/battery_card/BatteryGraphic';
import ElementGraphic from './components/cards/battery_card/ElementGraphic';

function App() {
  return (
    <div className="App">
      <LandingPageHeader />
      <BatteryGraphic />
      <div class="element-graphic-container-container" style={{marginLeft: "1rem"}}>
        <ElementGraphic 
          atomicNumber="13" 
          elementSymbol="Al" 
          elementName="Aluminum" 
          atomicWeight="26.981" 
        />
      </div>
    </div>

  );
}

export default App;
