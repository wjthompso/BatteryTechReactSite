// React component
import React from 'react';
import './BatteryGraphic.css';
import ElementGraphic from './ElementGraphic';

const BatteryGraphic = (props) => {
  let { width, elements } = props; // Destructure elements prop for individual element data

  const calculatedChemicalElementSize = width * 0.44;

  const enrichElementsWithSizeParameter = (elements) => elements.map(
    el => ({ ...el, size: calculatedChemicalElementSize }) // Spread the element data and add the calculated size
  );

  const enrichedElements = {
    top: elements.top ? enrichElementsWithSizeParameter(elements.top) : [],
    middle: elements.middle ? enrichElementsWithSizeParameter(elements.middle) : [],
    bottom: elements.bottom ? enrichElementsWithSizeParameter(elements.bottom) : [],
  };

  const batteryStyle = {
    '--battery-width': `${width}px`,
    width: `${width}px`,
    height: `${width * 1.9}px`,
  };

  const getTransformStylesForSpread = (index, total) => {
    index += 1; // To start from 1 instead of 0
    const middleIndex = Math.floor(total / 2);
    const isEven = total % 2 === 0;
    let shiftPercentage = 22;

    let sign = index <= middleIndex ? -1 : 1;

    if (isEven) {
      // Handling leftmost left element and rightmost right element
      if ([middleIndex, middleIndex + 1].includes(index)) {
        shiftPercentage = sign * shiftPercentage / 2;
      }
      else {
        // Handling left elements other than leftmost left element
        if (index < middleIndex) {
          shiftPercentage = sign * (((middleIndex - index) * shiftPercentage) + shiftPercentage / 2);
        }
        // Handling right elements other than rightmost right element
        else {
          shiftPercentage = sign * (((index - middleIndex - 1) * shiftPercentage) + shiftPercentage / 2);
        }
    }
    } else {
      // Handling left elements
      if (index < middleIndex + 1) {
        shiftPercentage = sign * ((middleIndex + 1 - index) * shiftPercentage);
      }
      else if (index === middleIndex + 1) {
        shiftPercentage = 0;
      }
      // Handling right elements
      else {
        shiftPercentage = sign * ((index - middleIndex - 1) * shiftPercentage);
      }
    }

    if (total === 1) {
      shiftPercentage = 0;
    };

    console.log("index:", index, "total", total, "shiftPercentage:", shiftPercentage, {
      zIndex: index, // To stack elements correctly
      transform: `translateX(${shiftPercentage}%)`,
    });

    return {
      zIndex: index, // To stack elements correctly
      transform: `translateX(${shiftPercentage}%)`,
    };
  };

  return (
    <div className="battery-container" style={batteryStyle}>
        <div className="battery-section-tip blue"></div>
        <div className="battery-main-body">
            <div className="battery-section section-top blue">
              {enrichedElements.top.map((element, index) => (
                  <ElementGraphic 
                    key={index} 
                    {...element} 
                    style={getTransformStylesForSpread(index, enrichedElements.top.length)}
                    />
                ))}
            </div>
            <div className="battery-section cream">
              {enrichedElements.middle.map((element, index) => (
                  <ElementGraphic 
                    key={index} 
                    {...element} 
                    style={getTransformStylesForSpread(index, enrichedElements.middle.length)}  
                  />
                ))}
            </div>
            <div className="battery-section section-bottom coral">    
              {enrichedElements.bottom.map((element, index) => (
                  <ElementGraphic 
                  key={index} 
                  {...element} 
                  style={getTransformStylesForSpread(index, enrichedElements.bottom.length)}
                  />
                ))}        
            </div>
        </div>
    </div>
  );
};

export default BatteryGraphic;