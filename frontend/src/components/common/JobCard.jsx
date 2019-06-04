import React from 'react';

function JobCard(props) {
  return(
    <div className="job-card card-shadow">
      <h2>{props.job_title} at {props.company}</h2>
      <div className="job-card-status">
        <p>Date Applied: {props.date_applied}</p>
      </div>
    </div>
  );
};

export default JobCard;