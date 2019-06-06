import React, { Component } from 'react';
import { Redirect, Link } from 'react-router-dom';

// Redux Imports
import { connect } from 'react-redux';
import { addContact } from '../../../actions/contacts';

// Component Imports
import MainContainer from '../MainContainer';
import TitleBar from '../../common/TitleBar';

class AddContact extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      company: '',
      phone_number: '',
      email: '',
      to_dashboard: false
    }
  
  this.onSubmit = this.onSubmit.bind(this);
  this.onChange = this.onChange.bind(this);
  }

  onChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  onSubmit(e) {
    e.preventDefault();
    const {name, company, phone_number, email} = this.state;
    const contact = {name, company, phone_number, email};
    this.props.addContact(contact);
    this.setState({
      to_dashboard: true
    })
  }

  render() {
    
    if(this.state.to_dashboard === true) {
      return(
        <Redirect exact to='/contacts' />
      )
    }

    return(
      <MainContainer>
        <TitleBar title='Add Contact'>
          <Link to='/contacts'>
            <div className="link-button">
              <h3>Back to Contacts</h3>
            </div>
          </Link>
        </TitleBar>
        <div className="form-container">
          <div className="form-card card-shadow">
            <form onSubmit={this.onSubmit}>
              <h2>Name:</h2>
              <input type="text" name="name" onChange={this.onChange} value={this.state.name}/>
              <h2>Company:</h2>
              <input type="text" name="company" onChange={this.onChange} value={this.state.company}/>
              <h2>Phone Number:</h2>
              <input type="text" name="phone_number" onChange={this.onChange} value={this.state.phone_number}/>
              <h2>Email:</h2>
              <input type="text" name="email" onChange={this.onChange} value={this.state.email}/>
              <div className="form-button">
                <button type="submit">Add Contact</button>
              </div>
            </form>        
          </div>
        </div>
      </MainContainer>
    );
  };
};

export default connect(null, { addContact })(AddContact);