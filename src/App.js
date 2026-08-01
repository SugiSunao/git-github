import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const [visits, setVisits] = useState(0);

useEffect(() => {
  fetch('http://localhost:8081/')
    .then(res => res.text())
    .then(data => setVisits(data))
    .catch(err => console.log(err));
}, []);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>React Project Team A</p>
        <p>Members: Sean & Aldrick</p>
        <p style={{ fontSize: '28px', color: '#61dafb', fontWeight: 'bold' }}>
           {visits}
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Solved OpenSSL problem related to React.
        </a>
      </header>
    </div>
  );
}

export default App;