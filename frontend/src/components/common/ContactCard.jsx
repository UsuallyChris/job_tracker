import React from 'react';
import { Link } from 'react-router-dom';

function ContactCard(props) {
  return (
    <Link to={`/contacts/${props.id}`} className="card card-shadow">
      <div>
        <h2>{props.name}</h2>
        <hr/>
        <h3>{props.company}</h3>
        <p>{props.email}</p>
        <p>{props.phone_number}</p>
      </div>
    </Link>
  );
};

export default ContactCard;