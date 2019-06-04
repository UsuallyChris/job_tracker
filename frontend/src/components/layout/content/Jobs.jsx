import React from 'react';

// Component Imports
import LeftContainer from '../menu/LeftContainer';
import Title from '../../common/Title';

function Jobs() {

  return(
    <div className="main-container">
      <LeftContainer />
      <div className="right-container">
        <div className="right-content-container shadow">
          <div className="card-container">
            <Title title='Jobs' />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Jobs;