// React component
import React from 'react';
import './ElementGraphic.css';

const ElementGraphic = (props, style) => {
    props.style ? console.log("style:", props.style.transform) : console.log("no style");
    const containerStyle = {
        '--container-width': `${props.size}px`, // Set the CSS variable
        width: `${props.size}px`, // Use the `size` for width
        height: `${props.size}px`, // Use the `size` for height to maintain a square
        ...props.style,
        // ... other styles
      };

    return (
        <div className="element-graphic-container" style={containerStyle}>
            <h3 className="atomic-number">{props.atomicNumber}</h3>
            <h1 className="element-symbol">{props.elementSymbol}</h1>
            <h3 className="element-name">{props.elementName}</h3>
            <h3 className="atomic-weight">{props.atomicWeight}</h3>
        </div>
    );
    };

export default ElementGraphic;