import "./App.css";

import React from "react";
import AppStateProvider from "./context/AppStateProvider";
import LandingPageHeader from "./components/front_page/LandingPageHeader";
import CardGalleryCarousel from "./components/front_page/CardGalleryCarousel";
import "./styles/tailwind.css"; // Import the Tailwind CSS file
import "./index.css";

const App: React.FC = () => {
  return (
    <AppStateProvider>
      <div className="App">
        <LandingPageHeader />
        <CardGalleryCarousel />
      </div>
    </AppStateProvider>
  );
};

export default App;
