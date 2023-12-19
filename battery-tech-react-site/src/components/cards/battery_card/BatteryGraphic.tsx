// React component
import React from 'react';
import './BatteryGraphic.css';
import ElementGraphic from './ElementGraphic';

// Define the type for individual elements
interface Element {
  atomicNumber: string;
  elementSymbol: string;
  elementName: string;
  atomicWeight: string;
}

// Define the type for the props
interface BatteryGraphicProps {
  width: number;
  elements: {
    cathode?: Element[];
    electrolyte?: Element[];
    anode?: Element[];
  };
}

interface TransformStyles {
  zIndex: number;
  transform: string;
}

const BatteryGraphic: React.FC<BatteryGraphicProps> = ({ width, elements }) => {
  const calculatedChemicalElementSize = width * 0.44;

  const enrichElementsWithSizeParameter = (elements: Element[]): Element[] => elements.map(
    el => ({ ...el, size: calculatedChemicalElementSize })
  );

  const enrichedElements = {
    cathode: elements.cathode ? enrichElementsWithSizeParameter(elements.cathode) : [],
    electrolyte: elements.electrolyte ? enrichElementsWithSizeParameter(elements.electrolyte) : [],
    anode: elements.anode ? enrichElementsWithSizeParameter(elements.anode) : [],
  };

  const batteryStyle = {
    '--battery-width': `${width}px`,
    width: `${width}px`,
    height: `${width * 1.9}px`,
  };

  const getTransformStylesForSpread = (index: number, total: number): TransformStyles => {
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
              {enrichedElements.cathode.map((element, index) => (
                  <ElementGraphic 
                    key={index} 
                    {...element} 
                    style={getTransformStylesForSpread(index, enrichedElements.cathode.length)}
                    />
                ))}
            </div>
            <div className="battery-section cream">
              {enrichedElements.electrolyte.map((element, index) => (
                  <ElementGraphic 
                    key={index} 
                    {...element} 
                    style={getTransformStylesForSpread(index, enrichedElements.electrolyte.length)}  
                  />
                ))}
            </div>
            <div className="battery-section section-bottom coral">    
              {enrichedElements.anode.map((element, index) => (
                  <ElementGraphic 
                  key={index} 
                  {...element} 
                  style={getTransformStylesForSpread(index, enrichedElements.anode.length)}
                  />
                ))}        
            </div>
        </div>
    </div>
  );
};

export default BatteryGraphic;