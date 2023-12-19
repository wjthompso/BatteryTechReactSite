// React component
import React from 'react';
import './BatteryCard.css';
import BatteryGraphic, { BatteryElectrochemicalComponents } from './BatteryGraphic';

type BatteryCardProps = {
    size: number;
    batteryElements: BatteryElectrochemicalComponents;
}

const BatteryCard: React.FC<BatteryCardProps> = ({ size, batteryElements }) => {
    const batteryCardContainerStyle = {
        '--battery-card-container-width': `${size}px`,
        width: `${0.5*size}px`, // Use the `size` for width
        height: `${size}px`, // Use the `size` for height to maintain a square
    }

    const batteryGraphicSize: number = size * 0.30;

    return (
        <div className="battery-card" style={ batteryCardContainerStyle }>
            <BatteryGraphic 
                width={batteryGraphicSize}
                elements={batteryElements}
                style={{transform: "translateX(-20%)"}}
            />
        </div>
    );
}

export default BatteryCard;
