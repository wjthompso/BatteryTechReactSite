"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// import logo from './logo.svg';
require("./App.css");
const react_1 = __importDefault(require("react"));
// import MyComponent from './MyComponent'; // Adjust the path as necessary
const LandingPageHeader_1 = __importDefault(require("./components/front_page/LandingPageHeader"));
const BatteryGraphic_1 = __importDefault(require("./components/cards/battery_card/BatteryGraphic"));
const ElementGraphic_1 = __importDefault(require("./components/cards/battery_card/ElementGraphic"));
const App = () => {
    const batteryElements = {
        cathode: [{
                atomicNumber: "13",
                elementSymbol: "Al",
                elementName: "Aluminum",
                atomicWeight: "26.9815",
            }],
        electrolyte: [{
                atomicNumber: "12",
                elementSymbol: "Mg",
                elementName: "Magnesium",
                atomicWeight: "24.305",
            },
            {
                atomicNumber: "12",
                elementSymbol: "Mg",
                elementName: "Magnesium",
                atomicWeight: "24.305",
            },
            {
              atomicNumber: "12",
              elementSymbol: "Mg",
              elementName: "Magnesium",
              atomicWeight: "24.305",
            },
            {
              atomicNumber: "12",
              elementSymbol: "Mg",
              elementName: "Magnesium",
              atomicWeight: "24.305",
            },
            {
              atomicNumber: "12",
              elementSymbol: "Mg",
              elementName: "Magnesium",
              atomicWeight: "24.305",
            },
        ],
        anode: [{
                atomicNumber: "25",
                elementSymbol: "Mn",
                elementName: "Manganese",
                atomicWeight: "54.938",
            }],
    };
    return (react_1.default.createElement("div", { className: "App" },
        react_1.default.createElement(LandingPageHeader_1.default, null),
        react_1.default.createElement(BatteryGraphic_1.default, { width: 220, elements: batteryElements }),
        react_1.default.createElement("div", { className: "element-graphic-container-container", style: { marginLeft: "1rem" } },
            react_1.default.createElement(ElementGraphic_1.default, { size: 46, atomicNumber: "13", elementSymbol: "Al", elementName: "Aluminum", atomicWeight: "26.981" }),
            react_1.default.createElement(ElementGraphic_1.default, { size: 100, atomicNumber: "13", elementSymbol: "Al", elementName: "Aluminum", atomicWeight: "26.981" }),
            react_1.default.createElement(ElementGraphic_1.default, { size: 200, atomicNumber: "26", elementSymbol: "Mn", elementName: "Manganese", atomicWeight: "26.981" }))));
};
exports.default = App;
