import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './InputName.css';

function InputName() {
  const navigate = useNavigate();
  const [name, setName] = useState('');

  const handleSubmit = (e) => {
    if (name.length > 0 && name) {
      navigate(`${name}`, { replace: true });
    } else {
      alert('Please enter your name!');
    }
  };

  return (
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
            <button onClick={handleSubmit} className="btn-submit-name">
              Next
            </button>
          </div>
        </div>
      </div>
    </main>
  );
}

export default InputName;
