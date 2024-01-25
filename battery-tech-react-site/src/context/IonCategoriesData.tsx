import { BatteryElectrochemicalComponents } from "../components/cards/battery_card/BatteryGraphic";

export type IonCategoryBatteryContent = {
  [key: string]: BatteryElectrochemicalComponents;
};

export type IonCategory = {
  ionCategoryDisplayName: string;
  ionBatteryChemistries: IonCategoryBatteryContent;
};

export type IonCategoriesData = {
  [ionCategoryId: string]: IonCategory;
  // [ionCategoryName: string]: ...???
};

export const ionCategoriesData: IonCategoriesData = {
  lithium: {
    ionCategoryDisplayName: "Lithium Ion",
    ionBatteryChemistries: {
      "Li | Al-Mg | Al": {
        ranking: 1,
        rankingString: "1st",
        cathode: [
          {
            atomicNumber: "13",
            elementSymbol: "Li",
            elementName: "Lithium",
            atomicWeight: "6.941",
          },
        ],
        electrolyte: [
          {
            atomicNumber: "13",
            elementSymbol: "Al",
            elementName: "Aluminum",
            atomicWeight: "26.9815",
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
        anode: [
          {
            atomicNumber: "25",
            elementSymbol: "Mn",
            elementName: "Manganese",
            atomicWeight: "54.938",
          },
        ],
        keyMetrics: {
          energyDensityWkg: 201.5,
          powerDensityWkg: 103.4,
          cycleLife: 34,
          energyEfficiency: 99.0,
          chargeEfficiency: 103.4,
          dischargeCapacity: 99.0,
          selfDischargeRate: 0.2,
          chargeDischargeEfficiency: 99.0,
          safety: "Safe",
          materialsUsed: "Manganese, Aluminum, Magnesium",
          recyclability: "Medium",
          specificEnergyWhkg: 34.5,
          operationalTemperatureRange: "-20-60",
          fastChargeCapability: "False",
        },
      },
      "Li | Al-Mg-Li | C": {
        ranking: 2,
        rankingString: "2nd",
        cathode: [
          {
            atomicNumber: "13",
            elementSymbol: "Li",
            elementName: "Lithium",
            atomicWeight: "6.941",
          },
        ],
        electrolyte: [
          {
            atomicNumber: "13",
            elementSymbol: "Al",
            elementName: "Aluminum",
            atomicWeight: "26.9815",
          },
          {
            atomicNumber: "12",
            elementSymbol: "Mg",
            elementName: "Magnesium",
            atomicWeight: "24.305",
          },
          {
            atomicNumber: "13",
            elementSymbol: "Li",
            elementName: "Lithium",
            atomicWeight: "6.941",
          },
        ],
        anode: [
          {
            atomicNumber: "6",
            elementSymbol: "C",
            elementName: "Carbon",
            atomicWeight: "12.011",
          },
        ],
        keyMetrics: {
          energyDensityWkg: 201.5,
          powerDensityWkg: 103.4,
          cycleLife: 34,
          energyEfficiency: 99.0,
          chargeEfficiency: 103.4,
          dischargeCapacity: 99.0,
          selfDischargeRate: 0.2,
          chargeDischargeEfficiency: 99.0,
          safety: "Safe",
          materialsUsed: "Manganese, Aluminum, Magnesium",
          recyclability: "Medium",
          specificEnergyWhkg: 34.5,
          operationalTemperatureRange: "-20-60",
          fastChargeCapability: "False",
        },
      },
    },
  },
  sodium: {
    ionCategoryDisplayName: "Sodium Ion",
    ionBatteryChemistries: {
      "Na | Al-Mg | Al": {
        ranking: 3,
        rankingString: "3rd",
        cathode: [
          {
            atomicNumber: "11",
            elementSymbol: "Na",
            elementName: "Sodium",
            atomicWeight: "22.990",
          },
        ],
        electrolyte: [
          {
            atomicNumber: "13",
            elementSymbol: "Al",
            elementName: "Aluminum",
            atomicWeight: "26.9815",
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
        anode: [
          {
            atomicNumber: "25",
            elementSymbol: "Mn",
            elementName: "Manganese",
            atomicWeight: "54.938",
          },
        ],
        keyMetrics: {
          energyDensityWkg: 201.5,
          powerDensityWkg: 103.4,
          cycleLife: 34,
          energyEfficiency: 99.0,
          chargeEfficiency: 103.4,
          dischargeCapacity: 99.0,
          selfDischargeRate: 0.2,
          chargeDischargeEfficiency: 99.0,
          safety: "Safe",
          materialsUsed: "Manganese, Aluminum, Magnesium",
          recyclability: "Medium",
          specificEnergyWhkg: 34.5,
          operationalTemperatureRange: "-20-60",
          fastChargeCapability: "False",
        },
      },
      "Na | Al-Mg-Li | C": {
        ranking: 4,
        rankingString: "4th",
        cathode: [
          {
            atomicNumber: "11",
            elementSymbol: "Na",
            elementName: "Sodium",
            atomicWeight: "22.990",
          },
        ],
        electrolyte: [
          {
            atomicNumber: "13",
            elementSymbol: "Al",
            elementName: "Aluminum",
            atomicWeight: "26.9815",
          },
          {
            atomicNumber: "12",
            elementSymbol: "Mg",
            elementName: "Magnesium",
            atomicWeight: "24.305",
          },
          {
            atomicNumber: "13",
            elementSymbol: "Li",
            elementName: "Lithium",
            atomicWeight: "6.941",
          },
        ],
        anode: [
          {
            atomicNumber: "6",
            elementSymbol: "C",
            elementName: "Carbon",
            atomicWeight: "12.011",
          },
        ],
        keyMetrics: {
          energyDensityWkg: 201.5,
          powerDensityWkg: 103.4,
          cycleLife: 34,
          energyEfficiency: 99.0,
          chargeEfficiency: 103.4,
          dischargeCapacity: 99.0,
          selfDischargeRate: 0.2,
          chargeDischargeEfficiency: 99.0,
          safety: "Safe",
          materialsUsed: "Manganese, Aluminum, Magnesium",
          recyclability: "Medium",
          specificEnergyWhkg: 34.5,
          operationalTemperatureRange: "-20-60",
          fastChargeCapability: "False",
        },
      },
    },
  },
  magnesium: {
    ionCategoryDisplayName: "Magnesium Ion",
    ionBatteryChemistries: {
      "Mg | Al-Mg | Al": {
        ranking: 5,
        rankingString: "5th",
        cathode: [
          {
            atomicNumber: "12",
            elementSymbol: "Mg",
            elementName: "Magnesium",
            atomicWeight: "24.305",
          },
        ],
        electrolyte: [
          {
            atomicNumber: "13",
            elementSymbol: "Al",
            elementName: "Aluminum",
            atomicWeight: "26.9815",
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
        anode: [
          {
            atomicNumber: "25",
            elementSymbol: "Mn",
            elementName: "Manganese",
            atomicWeight: "54.938",
          },
        ],
        keyMetrics: {
          energyDensityWkg: 201.5,
          powerDensityWkg: 103.4,
          cycleLife: 34,
          energyEfficiency: 99.0,
          chargeEfficiency: 103.4,
          dischargeCapacity: 99.0,
          selfDischargeRate: 0.2,
          chargeDischargeEfficiency: 99.0,
          safety: "Safe",
          materialsUsed: "Manganese, Aluminum, Magnesium",
          recyclability: "Medium",
          specificEnergyWhkg: 34.5,
          operationalTemperatureRange: "-20-60",
          fastChargeCapability: "False",
        },
      },
      "Mg | Al-Mg-Li | C": {
        ranking: 6,
        rankingString: "6th",
        cathode: [
          {
            atomicNumber: "12",
            elementSymbol: "Mg",
            elementName: "Magnesium",
            atomicWeight: "24.305",
          },
        ],
        electrolyte: [
          {
            atomicNumber: "13",
            elementSymbol: "Al",
            elementName: "Aluminum",
            atomicWeight: "26.9815",
          },
          {
            atomicNumber: "12",
            elementSymbol: "Mg",
            elementName: "Magnesium",
            atomicWeight: "24.305",
          },
          {
            atomicNumber: "13",
            elementSymbol: "Li",
            elementName: "Lithium",
            atomicWeight: "6.941",
          },
        ],
        anode: [
          {
            atomicNumber: "6",
            elementSymbol: "C",
            elementName: "Carbon",
            atomicWeight: "12.011",
          },
        ],
        keyMetrics: {
          energyDensityWkg: 201.5,
          powerDensityWkg: 103.4,
          cycleLife: 34,
          energyEfficiency: 99.0,
          chargeEfficiency: 103.4,
          dischargeCapacity: 99.0,
          selfDischargeRate: 0.2,
          chargeDischargeEfficiency: 99.0,
          safety: "Safe",
          materialsUsed: "Manganese, Aluminum, Magnesium",
          recyclability: "Medium",
          specificEnergyWhkg: 34.5,
          operationalTemperatureRange: "-20-60",
          fastChargeCapability: "False",
        },
      },
    },
  },
  aluminum: {
    ionCategoryDisplayName: "Aluminum Ion",
    ionBatteryChemistries: {
      "Al | Al-Mg | Al": {
        ranking: 7,
        rankingString: "7th",
        cathode: [
          {
            atomicNumber: "13",
            elementSymbol: "Al",
            elementName: "Aluminum",
            atomicWeight: "26.9815",
          },
        ],
        electrolyte: [
          {
            atomicNumber: "13",
            elementSymbol: "Al",
            elementName: "Aluminum",
            atomicWeight: "26.9815",
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
        anode: [
          {
            atomicNumber: "25",
            elementSymbol: "Mn",
            elementName: "Manganese",
            atomicWeight: "54.938",
          },
        ],
        keyMetrics: {
          energyDensityWkg: 201.5,
          powerDensityWkg: 103.4,
          cycleLife: 34,
          energyEfficiency: 99.0,
          chargeEfficiency: 103.4,
          dischargeCapacity: 99.0,
          selfDischargeRate: 0.2,
          chargeDischargeEfficiency: 99.0,
          safety: "Safe",
          materialsUsed: "Manganese, Aluminum, Magnesium",
          recyclability: "Medium",
          specificEnergyWhkg: 34.5,
          operationalTemperatureRange: "-20-60",
          fastChargeCapability: "False",
        },
      },
      "Al | Al-Mg-Li | C": {
        ranking: 8,
        rankingString: "8th",
        cathode: [
          {
            atomicNumber: "13",
            elementSymbol: "Al",
            elementName: "Aluminum",
            atomicWeight: "26.9815",
          },
        ],
        electrolyte: [
          {
            atomicNumber: "13",
            elementSymbol: "Al",
            elementName: "Aluminum",
            atomicWeight: "26.9815",
          },
          {
            atomicNumber: "12",
            elementSymbol: "Mg",
            elementName: "Magnesium",
            atomicWeight: "24.305",
          },
          {
            atomicNumber: "13",
            elementSymbol: "Li",
            elementName: "Lithium",
            atomicWeight: "6.941",
          },
        ],
        anode: [
          {
            atomicNumber: "6",
            elementSymbol: "C",
            elementName: "Carbon",
            atomicWeight: "12.011",
          },
        ],
        keyMetrics: {
          energyDensityWkg: 201.5,
          powerDensityWkg: 103.4,
          cycleLife: 34,
          energyEfficiency: 99.0,
          chargeEfficiency: 103.4,
          dischargeCapacity: 99.0,
          selfDischargeRate: 0.2,
          chargeDischargeEfficiency: 99.0,
          safety: "Safe",
          materialsUsed: "Manganese, Aluminum, Magnesium",
          recyclability: "Medium",
          specificEnergyWhkg: 34.5,
          operationalTemperatureRange: "-20-60",
          fastChargeCapability: "False",
        },
      },
    },
  },
  zinc: {
    ionCategoryDisplayName: "Zinc Ion",
    ionBatteryChemistries: {
      "Zn | Al-Mg | Al": {
        ranking: 9,
        rankingString: "9th",
        cathode: [
          {
            atomicNumber: "30",
            elementSymbol: "Zn",
            elementName: "Zinc",
            atomicWeight: "65.38",
          },
        ],
        electrolyte: [
          {
            atomicNumber: "13",
            elementSymbol: "Al",
            elementName: "Aluminum",
            atomicWeight: "26.9815",
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
        anode: [
          {
            atomicNumber: "25",
            elementSymbol: "Mn",
            elementName: "Manganese",
            atomicWeight: "54.938",
          },
        ],
        keyMetrics: {
          energyDensityWkg: 201.5,
          powerDensityWkg: 103.4,
          cycleLife: 34,
          energyEfficiency: 99.0,
          chargeEfficiency: 103.4,
          dischargeCapacity: 99.0,
          selfDischargeRate: 0.2,
          chargeDischargeEfficiency: 99.0,
          safety: "Safe",
          materialsUsed: "Manganese, Aluminum, Magnesium",
          recyclability: "Medium",
          specificEnergyWhkg: 34.5,
          operationalTemperatureRange: "-20-60",
          fastChargeCapability: "False",
        },
      },
      "Zn | Al-Mg-Li | C": {
        ranking: 10,
        rankingString: "10th",
        cathode: [
          {
            atomicNumber: "30",
            elementSymbol: "Zn",
            elementName: "Zinc",
            atomicWeight: "65.38",
          },
        ],
        electrolyte: [
          {
            atomicNumber: "13",
            elementSymbol: "Al",
            elementName: "Aluminum",
            atomicWeight: "26.9815",
          },
          {
            atomicNumber: "12",
            elementSymbol: "Mg",
            elementName: "Magnesium",
            atomicWeight: "24.305",
          },
          {
            atomicNumber: "13",
            elementSymbol: "Li",
            elementName: "Lithium",
            atomicWeight: "6.941",
          },
        ],
        anode: [
          {
            atomicNumber: "6",
            elementSymbol: "C",
            elementName: "Carbon",
            atomicWeight: "12.011",
          },
        ],
        keyMetrics: {
          energyDensityWkg: 201.5,
          powerDensityWkg: 103.4,
          cycleLife: 34,
          energyEfficiency: 99.0,
          chargeEfficiency: 103.4,
          dischargeCapacity: 99.0,
          selfDischargeRate: 0.2,
          chargeDischargeEfficiency: 99.0,
          safety: "Safe",
          materialsUsed: "Manganese, Aluminum, Magnesium",
          recyclability: "Medium",
          specificEnergyWhkg: 34.5,
          operationalTemperatureRange: "-20-60",
          fastChargeCapability: "False",
        },
      },
    },
  },
  nickelCadmium: {
    ionCategoryDisplayName: "Nickel-Cadium Ion",
    ionBatteryChemistries: {
      "Ni | Al-Mg | Al": {
        ranking: 11,
        rankingString: "11th",
        cathode: [
          {
            atomicNumber: "28",
            elementSymbol: "Ni",
            elementName: "Nickel",
            atomicWeight: "58.6934",
          },
        ],
        electrolyte: [
          {
            atomicNumber: "13",
            elementSymbol: "Al",
            elementName: "Aluminum",
            atomicWeight: "26.9815",
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
        anode: [
          {
            atomicNumber: "25",
            elementSymbol: "Mn",
            elementName: "Manganese",
            atomicWeight: "54.938",
          },
        ],
        keyMetrics: {
          energyDensityWkg: 201.5,
          powerDensityWkg: 103.4,
          cycleLife: 34,
          energyEfficiency: 99.0,
          chargeEfficiency: 103.4,
          dischargeCapacity: 99.0,
          selfDischargeRate: 0.2,
          chargeDischargeEfficiency: 99.0,
          safety: "Safe",
          materialsUsed: "Manganese, Aluminum, Magnesium",
          recyclability: "Medium",
          specificEnergyWhkg: 34.5,
          operationalTemperatureRange: "-20-60",
          fastChargeCapability: "False",
        },
      },
      "Ni | Al-Mg-Li | C": {
        ranking: 12,
        rankingString: "12th",
        cathode: [
          {
            atomicNumber: "28",
            elementSymbol: "Ni",
            elementName: "Nickel",
            atomicWeight: "58.6934",
          },
        ],
        electrolyte: [
          {
            atomicNumber: "13",
            elementSymbol: "Al",
            elementName: "Aluminum",
            atomicWeight: "26.9815",
          },
          {
            atomicNumber: "12",
            elementSymbol: "Mg",
            elementName: "Magnesium",
            atomicWeight: "24.305",
          },
          {
            atomicNumber: "13",
            elementSymbol: "Li",
            elementName: "Lithium",
            atomicWeight: "6.941",
          },
        ],
        anode: [
          {
            atomicNumber: "6",
            elementSymbol: "C",
            elementName: "Carbon",
            atomicWeight: "12.011",
          },
        ],
        keyMetrics: {
          energyDensityWkg: 201.5,
          powerDensityWkg: 103.4,
          cycleLife: 34,
          energyEfficiency: 99.0,
          chargeEfficiency: 103.4,
          dischargeCapacity: 99.0,
          selfDischargeRate: 0.2,
          chargeDischargeEfficiency: 99.0,
          safety: "Safe",
          materialsUsed: "Manganese, Aluminum, Magnesium",
          recyclability: "Medium",
          specificEnergyWhkg: 34.5,
          operationalTemperatureRange: "-20-60",
          fastChargeCapability: "False",
        },
      },
    },
  },
  lead: {
    ionCategoryDisplayName: "Lead Ion",
    ionBatteryChemistries: {
      "Pb | Al-Mg | Al": {
        ranking: 13,
        rankingString: "13th",
        cathode: [
          {
            atomicNumber: "82",
            elementSymbol: "Pb",
            elementName: "Lead",
            atomicWeight: "207.2",
          },
        ],
        electrolyte: [
          {
            atomicNumber: "13",
            elementSymbol: "Al",
            elementName: "Aluminum",
            atomicWeight: "26.9815",
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
        anode: [
          {
            atomicNumber: "25",
            elementSymbol: "Mn",
            elementName: "Manganese",
            atomicWeight: "54.938",
          },
        ],
        keyMetrics: {
          energyDensityWkg: 201.5,
          powerDensityWkg: 103.4,
          cycleLife: 34,
          energyEfficiency: 99.0,
          chargeEfficiency: 103.4,
          dischargeCapacity: 99.0,
          selfDischargeRate: 0.2,
          chargeDischargeEfficiency: 99.0,
          safety: "Safe",
          materialsUsed: "Manganese, Aluminum, Magnesium",
          recyclability: "Medium",
          specificEnergyWhkg: 34.5,
          operationalTemperatureRange: "-20-60",
          fastChargeCapability: "False",
        },
      },
      "Pb | Al-Mg-Li | C": {
        ranking: 14,
        rankingString: "14th",
        cathode: [
          {
            atomicNumber: "82",
            elementSymbol: "Pb",
            elementName: "Lead",
            atomicWeight: "207.2",
          },
        ],
        electrolyte: [
          {
            atomicNumber: "13",
            elementSymbol: "Al",
            elementName: "Aluminum",
            atomicWeight: "26.9815",
          },
          {
            atomicNumber: "12",
            elementSymbol: "Mg",
            elementName: "Magnesium",
            atomicWeight: "24.305",
          },
          {
            atomicNumber: "13",
            elementSymbol: "Li",
            elementName: "Lithium",
            atomicWeight: "6.941",
          },
        ],
        anode: [
          {
            atomicNumber: "6",
            elementSymbol: "C",
            elementName: "Carbon",
            atomicWeight: "12.011",
          },
        ],
        keyMetrics: {
          energyDensityWkg: 201.5,
          powerDensityWkg: 103.4,
          cycleLife: 34,
          energyEfficiency: 99.0,
          chargeEfficiency: 103.4,
          dischargeCapacity: 99.0,
          selfDischargeRate: 0.2,
          chargeDischargeEfficiency: 99.0,
          safety: "Safe",
          materialsUsed: "Manganese, Aluminum, Magnesium",
          recyclability: "Medium",
          specificEnergyWhkg: 34.5,
          operationalTemperatureRange: "-20-60",
          fastChargeCapability: "False",
        },
      },
    },
  },
};
