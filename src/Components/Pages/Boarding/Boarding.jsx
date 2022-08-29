import React from "react";
import { useNavigate } from "react-router-dom";
import MainFooter from "../../Footer/MainFooter";
import LoadingPlane from "../Main/LoadingPlane/LoadingPlane";
import PlaneImg from "../../../assets/images/icons/plane.svg";

import "./Boarding.css";

export default function Boarding(props) {
  const { initialSeconds = 10 } = props;
  const [isLoading, setIsLoading] = React.useState(false);
  const [seconds, setSeconds] = React.useState(initialSeconds);
  const navigate = useNavigate();

  React.useEffect(() => {
    document.body.style.overflow = "hidden";
    let myInterval = setInterval(() => {
      if (seconds > 0) {
        setSeconds(seconds - 1);
      }
      if (seconds === 0) {
        setIsLoading(true);
        document.body.style.overflow = "unset";
        setTimeout(() => {
          navigate(`/enjoy`, { replace: true });
        }, 3000);
      }
    }, 1000);
    return () => {
      clearInterval(myInterval);
    };
  });

  if (isLoading) {
    return <LoadingPlane />;
  }

  return (
    <>
      <main className="boarding-page">
        <div className="container">
          <div className="content">
            <h1>Welcome To Plane Fest Party</h1>
            <h1>Frinz Arley is Turning 1</h1>
            <p>Ready to Boarding in: </p>
            <h1>{seconds}</h1>
            <img src={PlaneImg} alt="" className="plane" />
          </div>
        </div>
      </main>
      <MainFooter />
    </>
  );
}
