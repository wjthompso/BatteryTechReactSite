import React from 'react';
import './BatteryCallout.css';

type BatteryCalloutProps = {
    height: number;
    elements: string; // e.g. "Al, Mg, Mn"
    electrochemicalCategory: string; // anode, electrolyte, or cathode
}

const BatteryCallout: React.FC<BatteryCalloutProps> = ({ height, elements, electrochemicalCategory}) => {

    const calloutStyle = {
        '--callout-height': `${height}px`,
        height: `${height}px`,
    };

    return (
        // callout positioning container is there cancel out the text-align: center property of the parent.
        <div className="callout-positioning-container" style={calloutStyle}>
            <div className="callout">
                <div className="callout-dot"></div>
                <div className="callout-line"></div>
                <div className="callout-label"><span className="elements">{elements}</span> {electrochemicalCategory}</div>
            </div>
        </div>
    );
};

export default BatteryCallout;