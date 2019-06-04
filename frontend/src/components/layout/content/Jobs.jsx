import React from 'react';

// Component Imports
import LeftContainer from '../menu/LeftContainer';

function Jobs() {

  return(
    <div className="main-container">
      <LeftContainer />
      <div className="right-container">
        <div className="right-content-container shadow">
          <div className="card-container">
            <h2>Jobs</h2>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Jobs;