import React, { Component } from 'react';
import { Link } from 'react-router-dom';

// Redux Imports
import { connect } from 'react-redux';
import { getJobs } from '../../actions/jobs';

// Component Imports
import MainContainer from '../layout/MainContainer';
import TitleBar from '../common/TitleBar';
import JobCard from '../jobs/JobCard';

class Jobs extends Component {

  componentDidMount() {
    this.props.getJobs();
  }

  render() {
    return(
      <MainContainer>
        <TitleBar title='Jobs'>
        <Link to='/jobs/add' className="link-button jelly">
          <div>
            <h3>Add New Job</h3>
          </div>
        </Link>
        </TitleBar>
        <div className="card-container">
          {this.props.jobs.map(job => (
            <JobCard
              key={job.id}
              id={job.id}
              job_title={job.job_title}
              company={job.company}
              date_applied={job.date_applied}
              job_status={job.job_status}
            />
          ))}
        </div>
      </MainContainer>
    );
  }
}

const mapStateToProps = state => ({
  jobs: state.jobs.jobs,
})

export default connect(mapStateToProps, { getJobs })(Jobs);