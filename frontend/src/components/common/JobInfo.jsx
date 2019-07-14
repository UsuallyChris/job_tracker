import React from 'react';

// Component Imports
import InfoButtons from '../common/InfoButtons';

function JobInfo(props) {
  return(
    <div className="info-container">
      <div className="info-card card-shadow">
        <h2>Job Title:</h2>
        <p>{props.job_title}</p>
        <h2>Company:</h2>
        <p>{props.company}</p>
        <h2>Job Status:</h2>
        <p>{props.job_status}</p>
        <InfoButtons 
          url='jobs'
          id={props.id}
          model='job'
        />
      </div>
    </div>
  );
}

export default JobInfo;