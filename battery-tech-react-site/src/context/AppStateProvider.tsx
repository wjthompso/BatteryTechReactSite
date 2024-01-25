import React, { useState, ReactNode } from "react";
import { ionCategoriesData, IonCategoriesData } from "./IonCategoriesData";

export type IGlobalState = {
  user: string | null;
  theme: string;
  ionCategories: IonCategoriesData | null; // Add this line
};

const defaultState: IGlobalState = {
  user: null,
  theme: "light",
  ionCategories: ionCategoriesData, // Add this line
};

export interface IGlobalStateContext {
  globalState: IGlobalState;
  setGlobalState: React.Dispatch<React.SetStateAction<IGlobalState>>;
}

export const AppContext = React.createContext<IGlobalStateContext>({
  globalState: defaultState,
  setGlobalState: () => {},
});

export type IAppStateProviderProps = {
  children: ReactNode;
};

const AppStateProvider: React.FC<IAppStateProviderProps> = ({ children }) => {
  const [globalState, setGlobalState] = useState<IGlobalState>(defaultState);

  return (
    <AppContext.Provider value={{ globalState, setGlobalState }}>
      {children}
    </AppContext.Provider>
  );
};

export default AppStateProvider;
