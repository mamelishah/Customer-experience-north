import React from "react";

import "./topHeaderInformation.css";

const TopInfoBar = ({
  items = ["Gratis fragt over 499kr.", "Levering 1-4 dage", "Hurtig ombytning"],
  country = "Denmark",
}) => {
  return (
    <div className="top-info-bar-wrapper">
      <div className="top-info-bar">
        <div className="top-info-bar__messages" aria-label="Fordele">
          {items.map((item, index) => (
            <React.Fragment key={item}>
              {index > 0 && (
                <span className="top-info-bar__divider" aria-hidden="true" />
              )}
              <span className="top-info-bar__message">{item}</span>
            </React.Fragment>
          ))}
        </div>

        <button
          type="button"
          className="top-info-bar__country"
          aria-label={`Vælg land, aktuelt ${country}`}
        >
          <span className="top-info-bar__flag" aria-hidden="true" />
          <span className="top-info-bar__country-text">{country}</span>
          <span className="top-info-bar__chevron" aria-hidden="true">
            ▾
          </span>
        </button>
      </div>
    </div>
  );
};

export default TopInfoBar;
