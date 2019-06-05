import React from 'react';
import LeftContainer from './menu/LeftContainer';
import RightContainer from './content/RightContainer';

function MainContainer(props) {
  return (
    <div className="main-container">
      <LeftContainer />
      <RightContainer>
        {props.children}
      </RightContainer>
    </div>
  );
};

export default MainContainer;