import React from 'react';
import { Link } from 'react-router-dom';

function InfoButtons(props) {
  return(
    <div className="info-buttons">
      <Link to={`/${props.url}/${props.id}/update`}>Update {props.model}</Link>
      <div className="delete-button">
        <p>Delete {props.model}</p>
      </div>
    </div>
  );
}

export default InfoButtons;