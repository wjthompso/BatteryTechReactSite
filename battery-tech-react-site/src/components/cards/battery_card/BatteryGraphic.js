// React component
import React from 'react';
import './BatteryGraphic.css';

const BatteryGraphic = () => {
  return (
    <div class="battery-container">
        <div class="battery-section-tip blue"></div>
        <div className="battery-main-body">
            <div className="battery-section section-top blue"></div>
            <div className="battery-section cream"></div>
            <div className="battery-section section-bottom coral"></div>
        </div>
    </div>
  );
};

export default BatteryGraphic;