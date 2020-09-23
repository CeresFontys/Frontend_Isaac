import React from 'react';
import logo from './logo.svg';
import Greet from './components/Greet'
import Welcome from './components/Welcome'
import './App.css';

function App() {
  return (
    <div className="App">
      <Greet></Greet>
      <Welcome></Welcome>
    </div>
  );
}

export default App;
