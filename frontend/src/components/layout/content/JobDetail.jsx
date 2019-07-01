import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

// Component Imports
import MainContainer from '../MainContainer';
import TitleBar from '../../common/TitleBar';
import JobInfo from '../../common/JobInfo';

import parseISO from 'date-fns/parse/index';


class JobDetail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: '',
      job_title: '',
      company: '',
      date_applied: '',
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
          date_applied: res.data.date_applied,
          job_status: res.data.job_status,
        });
      })
      .catch(err => {
        console.log(err.response);
        this.setState({
          httpstatus: err.response.status
        })
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

    const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    const dateISO = parseISO(this.state.date_applied);
    const formatted_date = `${months[dateISO.getMonth()]} ${dateISO.getDate()}, ${dateISO.getFullYear()}`;

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
          date_applied={formatted_date}
          job_status={job_status}
          id={this.state.id}
        />
      </MainContainer>
    );
  }

}

export default JobDetail;