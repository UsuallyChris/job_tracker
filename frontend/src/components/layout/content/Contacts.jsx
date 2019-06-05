import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

// Component Imports
import MainContainer from '../MainContainer';
import TitleBar from '../../common/TitleBar';
import ContactCard from '../../common/ContactCard';

class Contacts extends Component {
  constructor(props) {
    super(props);
    this.state = {
      contacts: []
    }

    this.getContacts = this.getContacts.bind(this);
  }

  getContacts() {
    axios.get('http://127.0.0.1:8000/api/contacts/')
      .then(res => this.setState({ contacts: res.data }));
  };

  componentDidMount() {
    this.getContacts();
  }

  render() {
    return(
      <MainContainer>
        <TitleBar title='Contacts'>
        <Link to='/contacts/add'>
          <div className="link-button">
            <h3>Add New Contact</h3>
          </div>
        </Link>
        </TitleBar>
        <div className="card-container">
          {this.state.contacts.map(contact => (
            <ContactCard
              key={contact.id}
              id={contact.id}
              name={contact.name}
              company={contact.company}
              email={contact.email}
              phone_number={contact.phone_number}
            />
          ))}
        </div>
      </MainContainer>
    );
  }
}

export default Contacts;