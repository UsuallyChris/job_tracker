import React, { Component } from 'react';
import { Redirect, Link } from 'react-router-dom';
import axios from 'axios';

// Component Imports
import MainContainer from '../MainContainer';
import TitleBar from '../../common/TitleBar';

// Date Picker Import
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import parseISO from 'date-fns/parse/index';

class UpdateJob extends Component {
  constructor(props) {
    super(props);
    this.state = {
      company: '',
      date_applied: '',
      job_title: '',
      job_status: '',
      id: '',
      to_dashboard: false
    }
  
  this.onSubmit = this.onSubmit.bind(this);
  this.onChange = this.onChange.bind(this);
  this.onChangeDate = this.onChangeDate.bind(this);
  }

  componentDidMount() {
    axios.get(`http://127.0.0.1:8000/api/jobs/${this.props.match.params.id}/`)
      .then(res => {
        this.setState({
          id: res.data.id,
          job_title: res.data.job_title,
          company: res.data.company,
          date_applied: parseISO(res.data.date_applied),
          job_status: res.data.job_status
        });
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

  onChangeDate(date) {
    this.setState({
      date_applied: date
    })
  }

  onSubmit(e) {
    e.preventDefault();
    const {company, date_applied, job_title, job_status} = this.state;
    const job = {company, date_applied, job_title, job_status};
    axios.put(`http://127.0.0.1:8000/api/jobs/${this.state.id}/`, job)
      .then(res => {
        this.setState({
          to_dashboard: true
        })
      })
      .catch(err => console.log(err.response));
  }

  render() {

    if(this.state.to_dashboard === true) {
      return(
        <Redirect exact to={`/jobs/${this.state.id}`} />
      )
    }

    return(
      <MainContainer>
        <TitleBar title='Update Job'>
          <Link to={`/jobs/${this.state.id}`}  className="link-button jelly">
            <div>
              <h3>Back to Job</h3>
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
                dateFormat="MMMM d, yyyy"
                onChange={this.onChangeDate}
                value={this.state.date_applied}
              />
              <select name="job_status" value={this.state.job_status} onChange={this.onChange}>
                <option value={"APP"}>Applied</option>
                <option value={"OFF"}>Offered</option>
                <option value={"REJ"}>Rejected</option>
              </select>
              <div className="form-button">
                <button type="submit">Update Job</button>
              </div>
            </form>
          </div>
        </div>
      </MainContainer>
    );
  };
};

export default UpdateJob;