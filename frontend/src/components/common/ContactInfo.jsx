import React from 'react';

// Component Imports
import InfoButtons from '../common/InfoButtons';

function ContactInfo(props) {
  return(
    <div className="info-container">
      <div className="info-card shadow">
        <h2>Name:</h2>
        <p>{props.name}</p>
        <h2>Company:</h2>
        <p>{props.company}</p>
        <h2>Email:</h2>
        <p>{props.email}</p>
        <h2>Phone Number:</h2>
        <p>{props.phone_number}</p>
        <InfoButtons 
          url='contacts'
          id={props.id}
          model='contact'
        />
      </div>
    </div>
  );
}

export default ContactInfo;