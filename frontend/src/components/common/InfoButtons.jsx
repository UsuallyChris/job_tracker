import React, { Component } from 'react';
//import axios from 'axios';
import { Link } from 'react-router-dom';

class InfoButtons extends Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }

  render() {
    return(
      <div className="info-buttons">
        <Link to={`/${this.props.type}/${this.props.id}/update`}>
          Update Job
        </Link>
        <div className="delete-button">
          <p>Delete Job</p>
        </div>
      </div>
    );
  }
}

export default InfoButtons;