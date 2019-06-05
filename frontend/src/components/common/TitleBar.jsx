import React from 'react';

// Component Imports
import Title from '../common/Title';

function TitleBar(props) {
  return(
    <div className="title-bar">
      <Title title={props.title} />
      {props.children}
    </div>
  );
};

export default TitleBar;