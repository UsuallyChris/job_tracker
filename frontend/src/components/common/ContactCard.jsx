import React from 'react';

function ContactCard(props) {
  return (
    <div className="contact-card">
      <h3>{props.name}</h3>
      <hr/>
      <h4>{props.company}</h4>
      <p>{props.email}</p>
      <p>{props.phone_number}</p>
    </div>
  );
};

export default ContactCard;