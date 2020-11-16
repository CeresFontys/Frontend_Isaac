import React from 'react';
import Greet from './components/Greet'
import Welcome from './components/Welcome'
import './App.css';
import AddFloor from './Floors/AddFloor';

function App() {
  return (
    <div className="App">
      {/* <Greet></Greet>
      <Welcome></Welcome> */}
      <AddFloor></AddFloor>
    </div>
  );
}

export default App;
