import React from 'react';
import { Link } from 'react-router-dom';

function JobCard(props) {

  let job_status = '';
  if (props.job_status === 'APP') {
    job_status = "Applied";
  } else if (props.job_status === 'OFF') {
    job_status = "Job Offered";
  } else {
    job_status = "Rejected";
  }

  return(
    <Link to={`/jobs/${props.id}`} className={`card card-shadow`}>
      <div>
        <h2>{props.job_title} at {props.company}</h2>
        <div className="job-card-status">
          <p>Date Applied: {props.date_applied}</p>
          <p>Job Status: {job_status}</p>
        </div>
      </div>
    </Link>
  );
};

export default JobCard;