import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

// Component Imports
import MainContainer from '../layout/MainContainer';
import TitleBar from '../common/TitleBar';
import ContactInfo from './ContactInfo';

class ContactDetail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: '',
      name: '',
      company: '',
      email: '',
      phone_number: '',
      status: ''
    }
  }

  componentDidMount() {
    axios.get(`/api/contacts/${this.props.match.params.id}/`)
      .then(res => {
        this.setState({
          id: res.data.id,
          name: res.data.name,
          company: res.data.company,
          email: res.data.email,
          phone_number: res.data.phone_number,
          status: res.status
        });
        console.log(res);
      })
      .catch(err => {
        console.log(err.response);
        this.setState({
          status: err.response.status
        })
      })
  }

  render() {
    return(
      <MainContainer>
        <TitleBar title='Contact Detail'>
        <Link to='/contacts' className="link-button jelly">
          <div>
            <h3>Back to Contacts</h3>
          </div>
        </Link>
        </TitleBar>
        <ContactInfo 
          name={this.state.name}
          company={this.state.company}
          email={this.state.email}
          phone_number={this.state.phone_number}
          id={this.state.id}
        />
      </MainContainer>
    );
  }

}

export default ContactDetail;