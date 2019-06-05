import React from 'react';

function RightContainer(props) {
  return(
    <div className="right-container">
      <div className="right-content-container shadow">
        {props.children}
      </div>
    </div>
  );
};

export default RightContainer;