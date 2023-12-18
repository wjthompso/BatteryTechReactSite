// React component
import React from 'react';
import './ElementGraphic.css';

const ElementGraphic = (props) => {
    const containerStyle = {
        '--container-width': `${props.size}px`, // Set the CSS variable
        width: `${props.size}px`, // Use the `size` for width
        height: `${props.size}px`, // Use the `size` for height to maintain a square
        // ... other styles
      };

    return (
        <div class="element-graphic-container" style={containerStyle}>
            <h3 class="atomic-number">{props.atomicNumber}</h3>
            <h1 class="element-symbol">{props.elementSymbol}</h1>
            <h3 class="element-name">{props.elementName}</h3>
            <h3 class="atomic-weight">{props.atomicWeight}</h3>
        </div>
    );
    };

export default ElementGraphic;