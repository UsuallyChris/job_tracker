import React, { Component } from 'react';
import { Redirect, Link } from 'react-router-dom';

// Redux Imports
import { connect } from 'react-redux';
import { addJob } from '../../../actions/jobs';

// Component Imports
import MainContainer from '../MainContainer';
import TitleBar from '../../common/TitleBar';

// Date Picker Import
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

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
  this.onChangeDate = this.onChangeDate.bind(this);
  }

  onChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  onChangeDate(date) {
    this.setState({
      date_applied: date
    })
  }

  onSubmit(e) {
    e.preventDefault();
    const {company, date_applied, job_title} = this.state;
    const job = {company, date_applied, job_title};
    this.props.addJob(job);
    this.setState({
      to_dashboard: true
    })
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
          <Link to='/jobs' className="link-button jelly">
            <div>
              <h3>Back to Jobs</h3>
            </div>
          </Link>
        </TitleBar>
        <div className="form-container">
          <div className="form-card card-shadow">
            <form onSubmit={this.onSubmit}>
              <h2>Job Title:</h2>
              <input type="text" name="job_title" onChange={this.onChange} value={this.state.job_title}/>
              <h2>Company:</h2>
              <input type="text" name="company" onChange={this.onChange} value={this.state.company}/>
              <h2>Date Applied:</h2>
              <DatePicker
                selected={this.state.date_applied} 
                placeholderText='Date Applied'
                allowSameDay={true}
                dateFormat="MMMM dd, yyyy"
                onChange={this.onChangeDate}
                value={this.state.date_applied}
              />
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

export default connect(null, { addJob })(AddJob);