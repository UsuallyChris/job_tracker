import React from 'react';
import './css/Normalize.css';
import './css/App.css';

// Component Imports
import LeftContainer from './components/layout/left/LeftContainer';
import RightContainer from './components/layout/right/RightContainer';

function App() {
  return (
    <div className="main-container">
      <LeftContainer />
      <RightContainer />
    </div>
  );
}

export default App;
