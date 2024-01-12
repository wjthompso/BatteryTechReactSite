// React component
import React from 'react';
import './BatteryCard.css';
import BatteryGraphic, { BatteryElectrochemicalComponents } from './BatteryGraphic';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons';
import { faClockRotateLeft } from '@fortawesome/free-solid-svg-icons';
import BadgeSVG from "./BadgeSVG";

type BatteryCardProps = {
    size: number;
    batteryElements: BatteryElectrochemicalComponents;
}

const BatteryCard: React.FC<BatteryCardProps> = ({ size, batteryElements }) => {
    const batteryCardContainerStyle = {
        '--battery-card-container-height': `${size}px`,
        width: `${0.5 * size}px`, // Use the `size` for width
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
                    <BadgeSVG className="badge-icon" />
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
                <div className="element-footer-tags">
                    <div className="element-footer-tag">
                        <h3 className="element-footer-tag-text">Aluminum</h3>
                    </div>
                    <div className="element-footer-tag">
                        <h3 className="element-footer-tag-text">Magnesium</h3>
                    </div>
                    <div className="element-footer-tag">
                        <h3 className="element-footer-tag-text">Manganese</h3>
                    </div>
                    <div className="element-footer-tag">
                        <h3 className="element-footer-tag-text">Manganese</h3>
                    </div>
                    <div className="element-footer-tag">
                        <h3 className="element-footer-tag-text">Manganese</h3>
                    </div>
                    <div className="element-footer-tag">
                        <h3 className="element-footer-tag-text">Manganese</h3>
                    </div>
                </div>
                <div className="footer-icons">
                    <div className="icon-container">
                        <FontAwesomeIcon
                            icon={faArrowUpRightFromSquare}
                            size="lg"
                        />
                    </div>
                    <div className="icon-container">
                        <FontAwesomeIcon
                            icon={faClockRotateLeft}
                            size="lg"
                        />
                    </div>
                </div>
            </div>
        </div>


    );
}

export default BatteryCard;
