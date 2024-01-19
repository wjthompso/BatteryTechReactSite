import React, { forwardRef, ForwardRefRenderFunction } from "react";
import "./IonCategoryCardStack.css";
import BatteryCard from "../cards/battery_card/BatteryCard";
import { BatteryElectrochemicalComponents } from "../cards/battery_card/BatteryGraphic";

type IonCategoryCardStackProps = {
  index: number;
  ionCategory: string;
};

const IonCategoryCardStack: ForwardRefRenderFunction<
  HTMLDivElement,
  IonCategoryCardStackProps
> = (props, ref) => {
  const batteryElements: BatteryElectrochemicalComponents = {
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
    anode: [
      {
        atomicNumber: "25",
        elementSymbol: "Mn",
        elementName: "Manganese",
        atomicWeight: "54.938",
      },
    ],
  };

  return (
    <div
      key={props.index}
      ref={ref}
      className="ion-category-card-stack bg-darkgray flex-column mx-5 flex min-w-[300px] flex-col items-center rounded-xl sm:min-w-[322px] md:min-w-[340px] lg:min-w-[355px] xl:min-w-[386px]"
    >
      <div className="ion-header-label mb-[20px] mt-[20px] flex h-[49px] w-[190px] items-center justify-center rounded-xl border-[1.34px] border-black bg-navy-blue-1 px-4 py-4 text-center text-white">
        <h1 className="font flex text-[1.2rem] font-extrabold">
          {props.ionCategory}
        </h1>
      </div>
      <BatteryCard size={600} batteryElements={batteryElements} />
      <BatteryCard size={600} batteryElements={batteryElements} />
      <BatteryCard size={600} batteryElements={batteryElements} />
      <BatteryCard size={600} batteryElements={batteryElements} />
      <BatteryCard size={600} batteryElements={batteryElements} />
      <BatteryCard size={600} batteryElements={batteryElements} />
      <BatteryCard size={600} batteryElements={batteryElements} />
      <BatteryCard size={600} batteryElements={batteryElements} />
      <BatteryCard size={600} batteryElements={batteryElements} />
      <BatteryCard size={600} batteryElements={batteryElements} />
      <BatteryCard size={600} batteryElements={batteryElements} />
    </div>
  );
};

export default forwardRef(IonCategoryCardStack);
