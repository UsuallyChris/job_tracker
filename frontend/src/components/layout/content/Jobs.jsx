import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

// Component Imports
import MainContainer from '../MainContainer';
import TitleBar from '../../common/TitleBar';
import JobCard from '../../common/JobCard'

class Jobs extends Component {
  constructor(props) {
    super(props);
    this.state = {
      jobs: []
    }

    this.getJobs = this.getJobs.bind(this);
  }

  getJobs() {
    axios.get('http://127.0.0.1:8000/api/jobs/')
      .then(res => this.setState({ jobs: res.data }));
  }

  componentDidMount() {
    this.getJobs();
  }

  render() {
    return(
      <MainContainer>
        <TitleBar title='Jobs'>
        <Link to='/jobs/add'>
            <div className="link-button">
              <h3>Add New Job</h3>
            </div>
          </Link>
        </TitleBar>
        <div className="card-container">
          {this.state.jobs.map(job => (
            <JobCard
              key={job.id}
              job_title={job.job_title}
              company={job.company}
              date_applied={job.date_applied}
            />
          ))}
        </div>
      </MainContainer>
    );
  }
}

export default Jobs;