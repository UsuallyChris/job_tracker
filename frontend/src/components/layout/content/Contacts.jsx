import React from 'react';

// Component Imports
import LeftContainer from '../menu/LeftContainer';
import Title from '../../common/Title';

function Contacts() {

  return(
    <div className="main-container">
      <LeftContainer />
      <div className="right-container">
        <div className="right-content-container shadow">
          <div className="card-container">
            <Title title='Contacts' />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contacts;