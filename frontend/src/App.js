import React from 'react';
import './css/Normalize.css';
import './css/App.css';

// Component Imports
import LeftContainer from './components/layout/left/LeftContainer';

import Jobs from './components/layout/right/Jobs';

function App() {
  return (
    <div className="main-container">
      <LeftContainer />
      <Jobs />
    </div>
  );
}

export default App;
