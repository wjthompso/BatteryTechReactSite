// import logo from './logo.svg';
import './App.css';

import React from 'react';
// import MyComponent from './MyComponent'; // Adjust the path as necessary
import LandingPageHeader from './components/front_page/LandingPageHeader';
import BatteryGraphic, { BatteryElectrochemicalComponents } from './components/cards/battery_card/BatteryGraphic';
import ElementGraphic from './components/cards/battery_card/ElementGraphic';
import BatteryCard from './components/cards/battery_card/BatteryCard';
import BatteryCallout from './components/cards/battery_card/BatteryCallout';

const App: React.FC = () => {
  const batteryElements: BatteryElectrochemicalComponents = {
    cathode: [{
      atomicNumber: "13",
      elementSymbol: "Al",
      elementName: "Aluminum",
      atomicWeight: "26.9815",
    }],
    electrolyte: [{
      atomicNumber: "12",
      elementSymbol: "Mg",
      elementName: "Magnesium",
      atomicWeight: "24.305",
    },
    {
      atomicNumber: "12",
      elementSymbol: "Mg",
      elementName: "Magnesium",
      atomicWeight: "24.305",
      },
    {
      atomicNumber: "12",
      elementSymbol: "Mg",
      elementName: "Magnesium",
      atomicWeight: "24.305",
    },
  ],
    anode: [{
      atomicNumber: "25",
      elementSymbol: "Mn",
      elementName: "Manganese",
      atomicWeight: "54.938",
    }],
  };

  console.log("batteryElements", batteryElements);

  return (
    <div className="App">
      <LandingPageHeader />
      <BatteryCard 
        size={600}
        batteryElements={batteryElements}
      />
      <BatteryGraphic 
        width={220}
        elements={batteryElements}
      />
      <BatteryCallout
        height={900}
        elements="Al-Mg-Mn"
        electrochemicalCategory="Cathode"
      />
      {/* <div className="element-graphic-container-container" 
      style={{marginLeft: "1rem"}}>
        <ElementGraphic 
          size={46}
          atomicNumber="13" 
          elementSymbol="Al" 
          elementName="Aluminum" 
          atomicWeight="26.981" 
        />
        <ElementGraphic 
          size={100}
          atomicNumber="13" 
          elementSymbol="Al" 
          elementName="Aluminum" 
          atomicWeight="26.981" 
        />
        <ElementGraphic 
          size={200}
          atomicNumber="26" 
          elementSymbol="Mn" 
          elementName="Manganese" 
          atomicWeight="26.981" 
        />
      </div> */}
    </div>

  );
}

export default App;
