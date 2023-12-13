import React from 'react';
import './LandingPageHeader.css'; // Import the CSS file

function LandingPageHeader(props) {
  return (
    <div className="landing-page-header">
        <div className="landing-page-header-text">
          <span style={{ fontFamily: 'Inter, sans-serif', fontWeight: 800, textAlign: "left"}}>
            CellStatus
          </span>
          <span style={{ fontFamily: 'Inter, sans-serif', fontWeight: 600, textAlign: "left"}}>
            {" "}
          </span>
          <span style={{ fontFamily: 'Inter, sans-serif', fontWeight: 500, textAlign: "left" }}>
            The current status of battery tech
          </span>
          <div className="div-4">
          Showing the current status of different battery technologies
          currently in research and development, categorized by their ion.
        </div>
        </div>
    </div>
  );
}

export default LandingPageHeader;