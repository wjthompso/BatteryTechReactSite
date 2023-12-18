// React component
import React from 'react';
import './BatteryGraphic.css';
import ElementGraphic from './ElementGraphic';

const BatteryGraphic = (props) => {
  let { width, elements } = props; // Destructure elements prop for individual element data

  const calculatedSize = width * 0.4; // Adjust the multiplier if needed to fit the element graphics

  const enrichedElements = {
    top: { ...elements.top, size: calculatedSize },
    middle: { ...elements.middle, size: calculatedSize },
    bottom: { ...elements.bottom, size: calculatedSize },
  };

  const batteryStyle = {
    '--battery-width': `${width}px`,
    width: `${width}px`,
    height: `${width * 1.9}px`, // Adjust the multiplier if needed to fit the element graphics
  };

  return (
    <div className="battery-container" style={batteryStyle}>
        <div className="battery-section-tip blue"></div>
        <div className="battery-main-body">
            <div className="battery-section section-top blue">
              {/* Render ElementGraphic for the top section, if data is provided */}
              {elements.top && <ElementGraphic {...enrichedElements.top} />}
            </div>
            <div className="battery-section cream">
              {/* Render ElementGraphic for the middle section, if data is provided */}
              {elements.middle && <ElementGraphic {...enrichedElements.middle} />}
            </div>
            <div className="battery-section section-bottom coral">
              {/* Render ElementGraphic for the bottom section, if data is provided */}
              {elements.bottom && <ElementGraphic {...enrichedElements.bottom} />}
            </div>
        </div>
    </div>
  );
};

export default BatteryGraphic;