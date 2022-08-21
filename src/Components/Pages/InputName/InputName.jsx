import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import MainFooter from "../../Footer/MainFooter";
import "./InputName.css";
import laguPesawat from "../../../assets/sounds/lagu_pesawat.mp3";

function InputName() {
  const navigate = useNavigate();
  const [name, setName] = useState("");

  const audio = new Audio(laguPesawat);

  const handleSubmit = () => {
    if (name.length > 0 && name) {
      navigate(`${name}`, { replace: true });
      audio.play();
    } else {
      alert("Please enter your name!");
    }
  };

  return (
    <>
      <main className="input-name-page">
        <div className="container">
          <div className="content">
            <h1>Welcome </h1>
            <p>Please input your name</p>
            <div className="card">
              <input
                onChange={(e) => setName(e.target.value)}
                className="input-name"
                type="text"
                placeholder="Input Your Name"
              />
              <button
                type="button"
                onClick={handleSubmit}
                className="btn-submit-name"
              >
                Next
              </button>
            </div>
          </div>
        </div>
      </main>

      <MainFooter />
    </>
  );
}

export default InputName;
