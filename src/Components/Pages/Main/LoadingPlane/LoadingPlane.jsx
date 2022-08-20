import React from 'react';
import PlaneImg from '../../../../assets/images/icons/plane.svg';
import './LoadingPlane.modules.css';

function LoadingPlane() {
  return (
    <div className="container__plane">
      <div className="awan-wrapper">
        <div className="awan-top"></div>
        <img src={PlaneImg} alt="" className="plane-img" />
        <div className="awan-bottom"></div>
      </div>
    </div>
  );
}

export default LoadingPlane;
