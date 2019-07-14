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
      job_status: '',
    }
  }

  componentDidMount() {
    axios.get(`http://127.0.0.1:8000/api/jobs/${this.props.match.params.id}/`)
      .then(res => {
        this.setState({
          id: res.data.id,
          job_title: res.data.job_title,
          company: res.data.company,
          job_status: res.data.job_status,
        });
      })
      .catch(err => {
        console.log(err.response);
      })
  }

  render() {

    let job_status = '';
    if (this.state.job_status === 'APP') {
      job_status = "Applied";
    } else if (this.state.job_status === 'OFF') {
      job_status = "Job Offered";
    } else {
      job_status = "Rejected";
    }

    return(
      <MainContainer>
        <TitleBar title='Job Detail'>
          <Link to='/jobs' className="link-button jelly">
            <div>
              <h3>Back to Jobs</h3>
            </div>
          </Link>
        </TitleBar>
        <JobInfo 
          job_title={this.state.job_title}
          company={this.state.company}
          job_status={job_status}
          id={this.state.id}
        />
      </MainContainer>
    );
  }

}

export default JobDetail;