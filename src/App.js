import React from 'react';
import ChartContainer from './components/ChartContainer';
import './App.css';

function App() {
  return (
    <div className="App">
      <div className="content">
        <h1>Brazilian Population Chart</h1>
        <ChartContainer />
      </div>
    </div>
  );
}

export default App;
