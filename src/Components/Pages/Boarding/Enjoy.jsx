import React from "react";
import { TypeAnimation } from "react-type-animation";
import MainFooter from "../../Footer/MainFooter";
import Person from "../../../assets/images/thumbs/person.png";
import "./Enjoy.css";

export default function Enjoy() {
  return (
    <>
      <main className="enjoy-page">
        <div className="container">
          <div className="content">
            <TypeAnimation
              sequence={["Let's The Ride...", 2000, "Enjoy The Party...", 2000]}
              wrapper="div"
              cursor={true}
              repeat={Infinity}
              style={{ fontSize: "2em", color: "#0b0d7b", textAlign: "center" }}
            ></TypeAnimation>

            <p>Stay Safe and Keep the Health Protocol</p>
            <figure className="person">
              <img src={Person} alt="person" />
            </figure>
          </div>
        </div>
      </main>
      <MainFooter />
    </>
  );
}
