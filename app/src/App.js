import React from 'react';
import './App.css';
import Inventory from './Components/Inventory';
import Navbar from './Components/Navbar';

function App() {
  return (
    <div className="container-fluid bg-dark-grey">
      <Navbar/>
      <Inventory/>
    </div>
  );
}

export default App;