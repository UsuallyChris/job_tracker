import React from 'react';

function JobInfo(props) {
  return(
    <div className="info-container">
      <div className="info-card card-shadow">
        <h2>Name:</h2>
        <p>{props.name}</p>
        <h2>Company:</h2>
        <p>{props.company}</p>
        <h2>Email:</h2>
        <p>{props.email}</p>
        <h2>Phone Number:</h2>
        <p>{props.phone_number}</p>
      </div>
      <div className="info-buttons">

      </div>
    </div>
  );
}

export default JobInfo;