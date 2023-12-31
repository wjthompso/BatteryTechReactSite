import React from 'react';
import './LandingPageHeader.css'; // Import the CSS file

/**
 * LandingPageHeader Component
 *
 * The `LandingPageHeader` component displays the website name, slogan, and a brief
 * description of the website's purpose. It serves as the header section for the
 * landing page of the CellStatus application.
 *
 * @returns {JSX.Element} The JSX representation of the landing page header.
 */
const LandingPageHeader: React.FC = () => {
  return (
    <div className="landing-page-header h-1/6">
        <div className="landing-page-header-text">
          {/* <span style={{ fontFamily: 'Inter, sans-serif', fontWeight: 800, textAlign: "left"}}>
            CellStatus<br/>
          </span> */}
          <span style={{ fontFamily: 'Helvetica, sans-serif', fontWeight: 600, }}>
            {" "}
          </span>
          <span style={{ fontFamily: 'Helvetica, sans-serif', fontWeight: 500 }}>
            The current status of battery technology
        </span>
      </div>
      {/* <div className="landing-page-subheader-text">
        <span style={{ fontFamily: 'Helvetica, sans-serif', fontWeight: 500 }}>
          Organized by ion category
        </span>
      </div> */}
    </div>
  );
}

export default LandingPageHeader;