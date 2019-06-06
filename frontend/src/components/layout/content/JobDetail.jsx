import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

// Component Imports
import MainContainer from '../MainContainer';
import TitleBar from '../../common/TitleBar';
import JobInfo from '../../common/JobInfo';


class JobDetail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: '',
      job_title: '',
      company: '',
      date_applied: '',
      status: ''
    }
  }

  componentDidMount() {
    axios.get(`http://127.0.0.1:8000/api/jobs/${this.props.match.params.id}/`)
      .then(res => {
        this.setState({
          id: res.data.id,
          job_title: res.data.job_title,
          company: res.data.company,
          date_applied: res.data.date_applied,
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
        <TitleBar title='Job Detail'>
          <Link to='/jobs'>
            <div className="link-button">
              <h3>Back to Jobs</h3>
            </div>
          </Link>
        </TitleBar>
        <JobInfo 
          job_title={this.state.job_title}
          company={this.state.company}
          date_applied={this.state.date_applied}
          id={this.state.id}
        />
      </MainContainer>
    );
  }

}

export default JobDetail;