import React from 'react';

// Component Imports
import Title from '../../common/Title';

function RightContainer(props) {
  return(
    <div className="right-container">
      <div className="right-content-container shadow">
        <Title title={props.title} />
        {props.children}
      </div>
    </div>
  );
};

export default RightContainer;