// React component
import React from "react";
import "./ElementGraphic.css";

type ElementGraphicProps = {
  atomicNumber: string;
  elementSymbol: string;
  elementName: string;
  atomicWeight: string;
  size: number;
  classNames?: string[];
  style?: React.CSSProperties;
};

/**
 * ElementGraphic.tsx
 *
 * Description:
 * -----------
 * ElementGraphic is a React component that displays information about a chemical element.
 * It visualizes the element's atomic number, chemical symbol, name, and atomic weight
 * within a square container of a specified size.
 *
 * Note on fanning out electrical elements: When element graphics get fanned out
 * in an ascending stair-case like stack in the BatteryGraphic component, we
 * want to allow the user to hover over one of the lower elements in the stack
 * and have it appear on top of the other elements in the stack. To do this, we
 * need to make sure that the element graphic that is being hovered over has a
 * higher z-index and that there are no inline styles overriding the z-index
 * getting set from a CSS class.
 *
 * Props:
 * ------
 *
 * @param {ElementGraphicProps} props - The component's props.
 * @param {string} props.atomicNumber - The atomic number of the element.
 * @param {string} props.elementSymbol - The chemical symbol of the element.
 * @param {string} props.elementName - The name of the element.
 * @param {string} props.atomicWeight - The atomic weight of the element.
 * @param {string[]} [props.classNames] - Additional CSS class names to apply to the container. Most likely Tailwind CSS classes.
 * @param {number} props.size - The size of the element graphic in pixels.
 * @param {React.CSSProperties} [props.style] - Additional CSS styles to apply to the container.
 *
 * Example Usage:
 * --------------
 * @example
 * <ElementGraphic
 *   atomicNumber="13"
 *   elementSymbol="Al"
 *   elementName="Aluminum"
 *   atomicWeight="26.9815"
 *   size={50}
 *   style={{ backgroundColor: 'blue' }}
 * />
 *
 * @returns {JSX.Element} JSX element representing the ElementGraphic component.
 */

const ElementGraphic: React.FC<ElementGraphicProps> = (props) => {
  const containerStyle = {
    "--container-width": `${props.size}px`,
    width: `${props.size}px`, // Use the `size` for width
    height: `${props.size}px`, // Use the `size` for height to maintain a square
    ...props.style,
  };

  let elementGraphicContainerClassName: string = "element-graphic-container";

  if (props.classNames) {
    const additionalClassNames: string = props.classNames.join(" ");
    elementGraphicContainerClassName += " " + additionalClassNames;
  }

  return (
    <div className={elementGraphicContainerClassName} style={containerStyle}>
      <h3 className="atomic-number">{props.atomicNumber}</h3>
      <h1 className="element-symbol">{props.elementSymbol}</h1>
      <h3 className="element-name">{props.elementName}</h3>
      <h3 className="atomic-weight">{props.atomicWeight}</h3>
    </div>
  );
};

export default ElementGraphic;
