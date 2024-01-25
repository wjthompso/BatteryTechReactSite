// React component
import React from "react";
import "./BatteryCard.css";
import BatteryGraphic, {
  KeyMetrics,
  BatteryElectrochemicalComponents,
} from "./BatteryGraphic";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";
import { faClockRotateLeft } from "@fortawesome/free-solid-svg-icons";
import BadgeSVG from "./BadgeSVG";

type BatteryCardProps = {
  size: number;
  batteryChemistryName: string;
  batteryElectrochemicalComponents: BatteryElectrochemicalComponents;
  ranking?: number;
  rankingString?: string;
  keyMetrics?: {
    energyDensity: number;
    powerDensity: number;
    cycleLife: number;
    energyEfficiency: number;
    chargeEfficiency: number;
    dischargeCapacity: number;
    selfDischargeRate: number;
    chargeDischargeEfficiency: number;
    safety: string;
    materialsUsed: string;
    recyclability: string;
    specificEnergy: number;
    operationalTemperatureRange: string;
    fastChargeCapability: boolean;
  };
};

/**
 *
 * This is the BatteryCard component. It is a React component that renders a battery card
 * with all of the necessary information for a particular battery technology.
 *
 * The size of the battery card is determined by the `size` prop. The `size` prop is a number
 * that represents the height of the battery card in pixels. The width of the battery card is
 * determined by the `size` prop as well. The width is half of the `size` prop.
 *
 * @param size
 * @param batteryElements
 * @returns
 */
const BatteryCard: React.FC<BatteryCardProps> = ({
  size,
  batteryChemistryName,
  batteryElectrochemicalComponents,
  keyMetrics,
}) => {
  const batteryCardContainerStyle = {
    "--battery-card-container-height": `${size}px`,
    width: `${0.5 * size}px`, // Use the `size` for width
    height: `${size}px`, // Use the `size` for height to maintain a square
  };

  const batteryGraphicSize: number = size * 0.167;

  // Build the anodeDisplayName, electrolyteDisplayName, and cathodeDisplayName
  // from the batteryElectrochemicalComponents object
  const anodeDisplayName = batteryElectrochemicalComponents.anode
    .map((element) => element.elementSymbol)
    .join("-");
  const electrolyteDisplayName = batteryElectrochemicalComponents.electrolyte
    .map((element) => element.elementSymbol)
    .join("-");
  const cathodeDisplayName = batteryElectrochemicalComponents.cathode
    .map((element) => element.elementSymbol)
    .join("-");

  const metrics: KeyMetrics = batteryElectrochemicalComponents.keyMetrics!;

  return (
    <div className="battery-card" style={batteryCardContainerStyle}>
      <div className="battery-title-graphic-ranking-positioning-box">
        <h1 className="battery-card-title">{batteryChemistryName}</h1>
        <div className="battery-graphic-positioning-box">
          <BatteryGraphic
            width={batteryGraphicSize}
            anodeDisplayName={anodeDisplayName}
            electrolyteDisplayName={electrolyteDisplayName}
            cathodeDisplayName={cathodeDisplayName}
            elements={batteryElectrochemicalComponents}
            // style={{transform: "translateX(-85%)"}}
          />
        </div>
        {batteryElectrochemicalComponents.rankingString && (
          <div className="badge-container">
            <BadgeSVG className="badge-icon" />
            <h3 className="badge-ranking-number">
              {batteryElectrochemicalComponents.rankingString}
            </h3>
          </div>
        )}
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
          <h2 className="metrics-value">{metrics.energyDensityWkg}</h2>
          <h2 className="metrics-value">{metrics.powerDensityWkg}</h2>
          <h2 className="metrics-value">{metrics.cycleLife}</h2>
          <h2 className="metrics-value">{metrics.energyEfficiency}</h2>
          <h2 className="metrics-value">{metrics.chargeEfficiency}</h2>
          <h2 className="metrics-value">{metrics.dischargeCapacity}</h2>
          <h2 className="metrics-value">{metrics.selfDischargeRate}</h2>
          <h2 className="metrics-value">{metrics.chargeDischargeEfficiency}</h2>
          <h2 className="metrics-value">{metrics.safety}</h2>
          <h2 className="metrics-value">{metrics.materialsUsed}</h2>
          <h2 className="metrics-value">{metrics.recyclability}</h2>
          <h2 className="metrics-value">{metrics.specificEnergyWhkg}</h2>
          <h2 className="metrics-value">
            {metrics.operationalTemperatureRange}
          </h2>
          <h2 className="metrics-value">{metrics.fastChargeCapability}</h2>
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
            <FontAwesomeIcon icon={faArrowUpRightFromSquare} size="lg" />
          </div>
          <div className="icon-container">
            <FontAwesomeIcon icon={faClockRotateLeft} size="lg" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default BatteryCard;
