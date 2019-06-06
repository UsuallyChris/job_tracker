import React, { Component } from 'react';
import { Redirect, Link } from 'react-router-dom';
import axios from 'axios';

// Component Imports
import MainContainer from '../MainContainer';
import TitleBar from '../../common/TitleBar';

class UpdateContact extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      company: '',
      phone_number: '',
      email: '',
      id: '',
      to_dashboard: false
    }
  
  this.onSubmit = this.onSubmit.bind(this);
  this.onChange = this.onChange.bind(this);
  }

  componentDidMount() {
    axios.get(`http://127.0.0.1:8000/api/contacts/${this.props.match.params.id}/`)
      .then(res => {
        this.setState({
          id: res.data.id,
          name: res.data.name,
          company: res.data.company,
          phone_number: res.data.phone_number,
          email: res.data.email
        });
        console.log(res);
      })
      .catch(err => {
        console.log(err.response);
      })
  }

  onChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  onSubmit(e) {
    e.preventDefault();
    const {name, company, phone_number, email} = this.state;
    const job = {name, company, phone_number, email};
    axios.put(`http://127.0.0.1:8000/api/contacts/${this.state.id}/`, job)
      .then(res => {
        console.log(res);
        this.setState({
          to_dashboard: true
        })
      })
      .catch(err => console.log(err.response));
  }

  render() {

    if(this.state.to_dashboard === true) {
      return(
        <Redirect exact to={`/contacts/${this.state.id}`} />
      )
    }

    return(
      <MainContainer>
        <TitleBar title='Update Contact'>
          <Link to={`/contacts/${this.state.id}`}>
            <div className="link-button">
              <h3>Back to Contact</h3>
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
                <button type="submit">Update Contact</button>
              </div>
            </form>        
          </div>
        </div>
      </MainContainer>
    );
  };
};

export default UpdateContact;