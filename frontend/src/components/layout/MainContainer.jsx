import React from 'react';
import LeftContainer from './menu/LeftContainer';
import RightContainer from './content/RightContainer';

function MainContainer(props) {
  return (
    <div className="main-container">
      <LeftContainer />
      <RightContainer title={props.title}>
        {props.children}
      </RightContainer>
    </div>
  );
};

export default MainContainer;