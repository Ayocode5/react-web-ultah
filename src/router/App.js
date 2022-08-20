import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Main from '../Components/Pages/Main/Main';
import Welcome from '../Components/Pages/Welcome/Welcome';

function App() {
  return (
    <>
      <Routes>
        <Route path="/:name" element={<Welcome />} />
        <Route path="/invitation/:name" element={<Main />} />
      </Routes>
    </>
  );
}

export default App;
