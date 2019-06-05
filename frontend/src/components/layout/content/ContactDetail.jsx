import React, { Component } from 'react';
import { Link } from 'react-router-dom';

// Component Imports
import MainContainer from '../MainContainer';
import TitleBar from '../../common/TitleBar';

class ContactDetail extends Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }

  render() {
    return(
      <MainContainer>
        <TitleBar title='Contact Detail'>
        <Link to='/contacts'>
          <div className="link-button">
            <h3>Back to Contacts</h3>
          </div>
        </Link>
        </TitleBar>
      </MainContainer>
    );
  }

}

export default ContactDetail;