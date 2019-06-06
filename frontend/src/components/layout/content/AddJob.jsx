import React, { Component } from 'react';
import { Redirect, Link } from 'react-router-dom';
import axios from 'axios';

// Component Imports
import MainContainer from '../MainContainer';
import TitleBar from '../../common/TitleBar';

class AddJob extends Component {
  constructor(props) {
    super(props);
    this.state = {
      company: '',
      date_applied: '',
      job_title: '',
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
    const {company, date_applied, job_title} = this.state;
    const job = {company, date_applied, job_title};
    axios.post('http://127.0.0.1:8000/api/jobs/', job)
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
        <Redirect exact to='/jobs' />
      )
    }

    return(
      <MainContainer>
        <TitleBar title='Add Job'>
          <Link to='/jobs'>
            <div className="link-button">
              <h3>Back to Jobs</h3>
            </div>
          </Link>
        </TitleBar>
        <div className="form-container">
          <div className="form-card card-shadow">
            <form onSubmit={this.onSubmit}>
              <h2>Company:</h2>
              <input type="text" name="company" onChange={this.onChange} value={this.state.company}/>
              <h2>Job Title:</h2>
              <input type="text" name="job_title" onChange={this.onChange} value={this.state.job_title}/>
              <h2>Date Applied:</h2>
              <input type="text" name="date_applied" onChange={this.onChange} value={this.state.date_applied}/>
              <div className="form-button">
                <button type="submit">Add Job</button>
              </div>
            </form>
          </div>
        </div>
      </MainContainer>
    );
  };
};

export default AddJob;