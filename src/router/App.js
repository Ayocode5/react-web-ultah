import React from "react";
import { Routes, Route } from "react-router-dom";
import Boarding from "../Components/Pages/Boarding/Boarding";
import Enjoy from "../Components/Pages/Boarding/Enjoy";
import InputName from "../Components/Pages/InputName/InputName";
import Main from "../Components/Pages/Main/Main";
import Welcome from "../Components/Pages/Welcome/Welcome";

function App() {
  return (
    <>
      <Routes>
        {/* QR Code Web */}
        {/* <Route path="/" element={<Boarding />} />
        <Route path="/enjoy" element={<Enjoy />} /> */}

        {/* Main Web */}
        <Route path="/" element={<InputName />} />
        <Route path="/:name" element={<Welcome />} />
        <Route path="/invitation/:name" element={<Main />} />
      </Routes>
    </>
  );
}

export default App;
