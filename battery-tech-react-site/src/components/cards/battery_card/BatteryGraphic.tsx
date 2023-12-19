// React component
import React from 'react';
import './BatteryGraphic.css';
import ElementGraphic from './ElementGraphic';

// Define the type for individual elements

type ElementData = {
  atomicNumber: string;
  elementSymbol: string;
  elementName: string;
  atomicWeight: string;
}

type EnrichedElementData = ElementData & {
  size: number;
}

type EnrichedBatteryElectrochemicalComponents = {
  anode: EnrichedElementData[];
  electrolyte: EnrichedElementData[];
  cathode: EnrichedElementData[];

}

export type BatteryElectrochemicalComponents = {
  anode: ElementData[];
  electrolyte: ElementData[];
  cathode: ElementData[];
}

// Define the type for the props
type BatteryGraphicProps = {
  width: number;
  elements: BatteryElectrochemicalComponents;
  style?: React.CSSProperties;
}

type TransformStyles = {
  zIndex: number;
  transform: string;
}
/**
 * BatteryGraphic.tsx
 *
 * Description:
 * -----------
 * This component is a battery graphic that can be used to display the battery's
 * electromchemical components, i.e., the anode, electrolyte, and cathode. The
 * component takes in a width parameter and a BatteryElectrochemicalComponents
 * object. The width parameter is used to calculate the size of the elements
 * that are displayed in the battery graphic.
 * 
 * Props:
 * ------
 * 
 * @param {{BatteryGraphicProps}} props - The component's props.
 * @param {{number}} props.width - The width of the battery graphic.
 * @param {{BatteryElectrochemicalComponents}} props.elements - An object containing the
 *   electrochemical components of the battery: anode, electrolyte, and cathode.
 * 
 * Example Usage:
 * --------------
 * @example
 * <BatteryGraphic
 *   width={220}
 *   elements={{
 *      anode: [{
 *        atomicNumber: "25",
 *        elementSymbol: "Mn",
 *        elementName: "Manganese",
 *         atomicWeight: "54.938",
 *     }],
 *      electrolyte: [{
 *        atomicNumber: "12",
 *        elementSymbol: "Mg",
 *        elementName: "Magnesium",
 *        atomicWeight: "24.305",
 *     }],
 *      cathode: [{
 *        atomicNumber: "13",
 *        elementSymbol: "Al",
 *        elementName: "Aluminum",
 *        atomicWeight: "26.9815",
 * }],
 * }}
 * />
 * 
 * @returns {JSX.Element}
 */

const BatteryGraphic: React.FC<BatteryGraphicProps> = ({ width, elements, style }) => {
  console.log("elements", elements);
  
  const calculatedChemicalElementSize = width * 0.44;

  const enrichElementsWithSizeParameter = (elements: ElementData[]): EnrichedElementData[] => elements.map(
    el => ({ ...el, size: calculatedChemicalElementSize })
  );

  const enrichedElements: EnrichedBatteryElectrochemicalComponents = {
    cathode: elements.cathode ? enrichElementsWithSizeParameter(elements.cathode) : [],
    electrolyte: elements.electrolyte ? enrichElementsWithSizeParameter(elements.electrolyte) : [],
    anode: elements.anode ? enrichElementsWithSizeParameter(elements.anode) : [],
  };

  const batteryStyle = {
    '--battery-width': `${width}px`,
    width: `${width}px`,
    height: `${width * 1.9}px`,
    ...style,
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