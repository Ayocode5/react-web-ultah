import React from "react";
import "./LoadingBounce.modules.css";
import PlaneBanner from "../../../../assets/images/thumbs/plane-banner.png";

function LoadingBounce() {
  return (
    <>
      <div className="loading__bounce">
        <div className="top-bg"></div>

        <div className="plane-wrapper">
          <img src={PlaneBanner} alt="pic" className="plane-banner" />
        </div>
        <div className="bottom-bg"></div>
      </div>
    </>
  );
}

export default LoadingBounce;
