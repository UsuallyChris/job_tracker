import React, { Component } from 'react';
import { Link } from 'react-router-dom';

// Redux Imports
import { connect } from 'react-redux';
import { getContacts } from '../../../actions/contacts';

// Component Imports
import MainContainer from '../MainContainer';
import TitleBar from '../../common/TitleBar';
import ContactCard from '../../common/ContactCard';

class Contacts extends Component {

  componentDidMount() {
    this.props.getContacts();
  }

  render() {
    return(
      <MainContainer>
        <TitleBar title='Contacts'>
        <Link to='/contacts/add' className="link-button jelly">
          <div>
            <h3>Add New Contact</h3>
          </div>
        </Link>
        </TitleBar>
        <div className="card-container">
          {this.props.contacts.map(contact => (
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

const mapStateToProps = state => ({
  contacts: state.contacts.contacts,
})

export default connect(mapStateToProps, { getContacts })(Contacts);