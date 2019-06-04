import React, { Component } from 'react';
import axios from 'axios';

// Component Imports
import LeftContainer from '../menu/LeftContainer';
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
      <div className="main-container">
        <LeftContainer />
        <div className="right-container">
          <div className="right-content-container shadow">
            <div className="card-container">
              {this.state.contacts.map(contact => (
                <ContactCard
                  key={contact.id}
                  name={contact.name}
                  company={contact.company}
                  email={contact.email}
                  phone_number={contact.phone_number}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Contacts;