import React, { Component } from 'react';
import { Link } from 'react-router-dom';

// Component Imports
import MainContainer from '../MainContainer';
import TitleBar from '../../common/TitleBar';

class JobDetail extends Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }

  render() {
    return(
      <MainContainer>
        <TitleBar title='Job Detail'>
        <Link to='/jobs'>
          <div className="link-button">
            <h3>Back to Jobs</h3>
          </div>
        </Link>
        </TitleBar>
      </MainContainer>
    );
  }

}

export default JobDetail;