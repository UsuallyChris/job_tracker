import React from 'react';

function JobInfo(props) {
  return(
    <div className="info-container">
      <div className="info-card card-shadow">
        <h2>Job Title:</h2>
        <p>{props.job_title}</p>
        <h2>Company:</h2>
        <p>{props.company}</p>
        <h2>Date Applied:</h2>
        <p>{props.date_applied}</p>
      </div>
      <div className="info-buttons">

      </div>
    </div>
  );
}

export default JobInfo;