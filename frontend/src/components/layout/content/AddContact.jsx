import React, { Component } from 'react';
import { Redirect, Link } from 'react-router-dom';
import axios from 'axios';

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
    axios.post('http://127.0.0.1:8000/api/contacts/', contact)
      .then(res => {
        console.log(res);
        this.setState({
          to_dashboard: true
        })
      })
      .catch(err => console.log(err.response.data));
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
        <form onSubmit={this.onSubmit}>
          <input type="text" name="name" onChange={this.onChange} value={this.state.name}/>
          <input type="text" name="company" onChange={this.onChange} value={this.state.company}/>
          <input type="text" name="phone_number" onChange={this.onChange} value={this.state.phone_number}/>
          <input type="text" name="email" onChange={this.onChange} value={this.state.email}/>
          <button type="submit">Add Contact</button>
        </form>
      </MainContainer>
    );
  };
};

export default AddContact;