import React from 'react';
import {
  Link
} from 'react-router-dom';

function Menu() {
  return(
    <div className="menu">
      <Link to='/jobs'>Jobs</Link>
      <Link to='/contacts'>Contacts</Link>
    </div>
  );
}

export default Menu;