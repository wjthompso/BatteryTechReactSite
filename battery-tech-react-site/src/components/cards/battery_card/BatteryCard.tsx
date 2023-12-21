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
        '--battery-card-container-height': `${size}px`,
        width: `${0.5*size}px`, // Use the `size` for width
        height: `${size}px`, // Use the `size` for height to maintain a square
    }

    const batteryGraphicSize: number = size * 0.167;

    return (
        <div className="battery-card" style={batteryCardContainerStyle}>
            <div className="battery-title-graphic-ranking-positioning-box">
                <h1 className="battery-card-title">AL | Al-Mg | Al</h1>
                <div className="battery-graphic-positioning-box">
                    <BatteryGraphic 
                    width={batteryGraphicSize}
                    elements={batteryElements}
                    // style={{transform: "translateX(-85%)"}}
                    />
                </div>
                <div className="badge-container">
                    <svg className="badge-icon-svg" viewBox="-6.99 0 44.009 44.009" xmlns="http://www.w3.org/2000/svg">
                        <path id="_42.Badge" data-name="42.Badge" d="M36.992,20.483V24.5l-3.485,2.011L31.5,30h-.511V45s0,.007,0,.011A.967.967,0,0,1,30,46l-.01,0a.978.978,0,0,1-.775-.4L23.987,40.38,18.762,45.6a.976.976,0,0,1-.775.4l-.01,0a.967.967,0,0,1-.988-.987s0-.007,0-.011V30h-.507l-2.012-3.482L10.985,24.5v-4.02L8.974,17l2.011-3.483V9.495l3.484-2.013L16.481,4h4.025l3.48-2.012L27.47,4h4.025L33.5,7.482,36.99,9.495v4.022L39,17ZM18.987,30V42.619l4.19-4.19a.942.942,0,0,1,.095-.144,1.05,1.05,0,0,1,1.43,0,1.023,1.023,0,0,1,.095.144l4.19,4.19V30H27.471l-3.484,2.013L20.507,30H18.986S18.987,30,18.987,30Zm16-15.948v-3.4l-2.948-1.7L30.34,6H26.934L23.989,4.3,21.046,6H17.64l-1.7,2.942-2.949,1.7v3.4L11.289,17l1.7,2.947v3.4l2.949,1.7,1.7,2.945h3.405l2.943,1.7,2.945-1.7h3.405l1.7-2.945,2.949-1.7v-3.4L36.686,17Z" transform="translate(-8.974 -1.991)" fill-rule="evenodd"/>
                    </svg>
                    <h3 className="badge-ranking-number">3rd</h3>
                </div>
            </div>
        
            <div className="metrics-grid">
                <div className="metrics-title">
                    <h3 className="metricss-title-text">Metrics</h3>
                </div>
                <div className="metrics-labels-column">
                    <h2 className="metrics-label">Energy Density (W/kg)</h2>
                    <h2 className="metrics-label">Power Density (W/kg)</h2>
                    <h2 className="metrics-label">Cycle Life</h2>
                    <h2 className="metrics-label">Energy Efficiency</h2>
                    <h2 className="metrics-label">Charge (Coulumbic) Efficiency</h2>
                    <h2 className="metrics-label">Discharge Capacity</h2>
                    <h2 className="metrics-label">Self-discharge Rate (%)</h2>
                    <h2 className="metrics-label">Charge/discharge Efficiency</h2>
                    <h2 className="metrics-label">Safety</h2>
                    <h2 className="metrics-label">Materials Used</h2>
                    <h2 className="metrics-label">Recyclability</h2>
                    <h2 className="metrics-label">Specific Energy (Wh/kg)</h2>
                    <h2 className="metrics-label">Operational Temperature Range (°C)</h2>
                    <h2 className="metrics-label">Fast Charge Capability</h2>
                </div>
                <div className="metrics-values-column">
                    <h2 className="metrics-value">201.5</h2>
                    <h2 className="metrics-value">103.4</h2>
                    <h2 className="metrics-value">99%</h2>
                    <h2 className="metrics-value">201.5</h2>
                    <h2 className="metrics-value">103.4</h2>
                    <h2 className="metrics-value">99%</h2>
                    <h2 className="metrics-value">201.5</h2>
                    <h2 className="metrics-value">103.4</h2>
                    <h2 className="metrics-value">Medium</h2>
                    <h2 className="metrics-value">Magnesium</h2>
                    <h2 className="metrics-value">Medium</h2>
                    <h2 className="metrics-value">34.5</h2>
                    <h2 className="metrics-value">70-92</h2>
                    <h2 className="metrics-value">False</h2>
                </div>
            </div>

            <div className="gray-divider"></div> 
            <div className="battery-card-footer">
                <p>Lorem ipsum</p>
            </div>
        </div>


    );
}

export default BatteryCard;
