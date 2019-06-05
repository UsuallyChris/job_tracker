import React from 'react';
import { Link } from 'react-router-dom';

function JobCard(props) {
  return(
    <Link to={`/jobs/${props.id}`} className="card card-shadow">
      <div>
        <h2>{props.job_title} at {props.company}</h2>
        <div className="job-card-status">
          <p>Date Applied: {props.date_applied}</p>
        </div>
      </div>
    </Link>
  );
};

export default JobCard;