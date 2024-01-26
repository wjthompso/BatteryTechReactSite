import React, { useContext, forwardRef, ForwardRefRenderFunction } from "react";
import "./IonCategoryCardStack.css";
import BatteryCard from "../cards/battery_card/BatteryCard";
// import { BatteryElectrochemicalComponents } from "../cards/battery_card/BatteryGraphic";
import { AppContext } from "../../context/AppStateProvider"; // Adjust the path as necessary

type IonCategoryCardStackProps = {
  index: number;
  ionCategoryId: string;
};

const IonCategoryCardStack: ForwardRefRenderFunction<
  HTMLDivElement,
  IonCategoryCardStackProps
> = (props, ref) => {
  const { globalState } = useContext(AppContext);

  const categoryChemistries =
    globalState.ionCategories?.[props.ionCategoryId].ionBatteryChemistries;
  const ionCategoryName =
    globalState.ionCategories?.[props.ionCategoryId].ionCategoryDisplayName;

  if (!categoryChemistries) {
    // Handle the case where batteryElements is not yet set in the global state
    return null; // or some fallback UI
  }

  // Create a BatteryCard for each chemistry in the ion category
  const batteryCards = Object.entries(categoryChemistries).map(
    ([batteryChemistryName, batteryElectrochemicalComponents], index) => (
      <BatteryCard
        key={index}
        size={600}
        batteryChemistryName={batteryChemistryName}
        batteryElectrochemicalComponents={batteryElectrochemicalComponents}
      />
    )
  );

  return (
    <div
      key={props.index}
      ref={ref}
      className="ion-category-card-stack bg-darkgray flex-column mx-[5px] flex min-w-[300px] flex-col items-center rounded-xl sm:mx-5 sm:min-w-[322px] md:min-w-[340px] lg:min-w-[355px] xl:min-w-[386px]"
    >
      <div className="ion-header-label mb-[20px] mt-[20px] flex h-[49px] w-[210px] items-center justify-center rounded-xl border-[1.34px] border-black bg-navy-blue-1 px-4 py-4 text-center text-white">
        <h1 className="font flex text-[1.2rem] font-extrabold">
          {ionCategoryName}
        </h1>
      </div>
      {batteryCards}
    </div>
  );
};

export default forwardRef(IonCategoryCardStack);
