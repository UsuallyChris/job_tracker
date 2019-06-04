import React from 'react';

function ContactCard(props) {
  return (
    <div className="card card-shadow">
      <h2>{props.name}</h2>
      <hr/>
      <h3>{props.company}</h3>
      <p>{props.email}</p>
      <p>{props.phone_number}</p>
    </div>
  );
};

export default ContactCard;