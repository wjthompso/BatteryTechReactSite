// React component
import React from 'react';
import './ElementGraphic.css';

const ElementGraphic = (props) => {
  return (
    <div class="element-graphic-container">
        <h3 class="atomic-number">{props.atomicNumber}</h3>
        <h1 class="element-symbol">{props.elementSymbol}</h1>
        <h3 class="element-name">{props.elementName}</h3>
        <h3 class="atomic-weight">{props.atomicWeight}</h3>
    </div>
  );
};

export default ElementGraphic;