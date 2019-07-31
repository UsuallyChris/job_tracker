import React from 'react';
import { Link } from 'react-router-dom';

function JobCard(props) {

  let job_status = '';
  let job_status_style = '';
  if (props.job_status === 'APP') {
    job_status = 'Applied';
    job_status_style = 'applied'
  } else if (props.job_status === 'OFF') {
    job_status = 'Job Offered';
    job_status_style = 'offered'
  } else {
    job_status = 'Rejected';
    job_status_style = 'rejected'
  }

  return(
    <Link to={`/jobs/${props.id}`} className={`card card-shadow ${job_status_style}`}>
      <div>
        <h2>{props.job_title} at {props.company}</h2>
        <div className="job-card-status">
          <p>Job Status: {job_status}</p>
        </div>
      </div>
    </Link>
  );
};

export default JobCard;