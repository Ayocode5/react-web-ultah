/* eslint-disable jsx-a11y/no-distracting-elements */
import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import LoadingBounce from "./LoadingBounce/LoadingBounce";
import RibbonImg from "../../../assets/images/icons/ribbon.svg";
import BabyPicture from "../../../assets/images/thumbs/pic.png";
import MainFooter from "../../Footer/MainFooter";
import laguPesawat from "../../../assets/sounds/lagu_pesawat.mp3";
import "./Welcome.css";

function Welcome() {
  const [isLoading, setIsLoading] = useState(true);
  const [approve, setApprove] = useState(false);
  const navigate = useNavigate();
  const params = useParams();
  const audio = new Audio(laguPesawat);

  const handleApprove = () => {
    setApprove(!approve);
  };

  const handleButtonClick = () => {
    if (approve) {
      navigate(`/invitation/${params.name}`, { replace: true });
      audio.play();
    } else {
      alert("Please approve the terms and conditions");
    }
  };

  useEffect(() => {
    document.body.style.overflow = "hidden";

    const interval = setInterval(() => {
      setIsLoading(false);
      document.body.style.overflow = "unset";
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  if (isLoading) {
    return <LoadingBounce />;
  }

  return (
    <>
      <main className="welcome-page">
        <div className="container">
          <img className="ribbon" src={RibbonImg} alt="ribbon" />

          <div className="content">
            <img src={BabyPicture} alt="pic" className="content-pic" />
            <div className="title">
              <span className="celebrate-text">
                <marquee
                  direction="right"
                  behaviour="alternate"
                  scrollamount="7"
                  width="90%"
                >
                  LET'S CELEBRATE LET'S CELEBRATE LET'S CELEBRATE
                </marquee>
              </span>
            </div>

            <div className="greeting">
              <div className="greeting-text">
                <h1 className="greeting-hi">Hi,</h1>
                <h1 className="greeting-name">Mr/Mrs. {params.name}</h1>
                <h1 className="greeting-text">
                  My name is Frinz Arley, I would like to invite you to My 1st
                  Birthday Party on
                  <br />
                  <span>17 September 2022</span>
                </h1>
              </div>

              <form className="checkbox">
                <label className="approve path">
                  <input
                    onChange={handleApprove}
                    type="checkbox"
                    id="confirm"
                  />
                  <svg viewBox="0 0 21 21">
                    <path d="M5,10.75 L8.5,14.25 L19.4,2.3 C18.8333333,1.43333333 18.0333333,1 17,1 L4,1 C2.35,1 1,2.35 1,4 L1,17 C1,18.65 2.35,20 4,20 L17,20 C18.65,20 20,18.65 20,17 L20,7.99769186"></path>
                  </svg>
                </label>
                <label htmlFor="confirm" className="checkbox-label">
                  if you delighted to join me and want to see more details of
                  the invitation, Please click the box.
                </label>
                <br />
              </form>

              <div className="btn-wrapper">
                <button
                  disabled={approve ? false : true}
                  type="button"
                  className={`btn ${approve ? "btn-active" : ""}`}
                  id="open"
                  onClick={handleButtonClick}
                >
                  Open Invitation
                </button>
              </div>
            </div>
          </div>
        </div>
      </main>
      <MainFooter />
    </>
  );
}

export default Welcome;
