/* -------------------<   COMPONENT   >-------------------- */
import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {

  return (
    <div>
        <ul className="navigation">
          <li><Link to={`/students`}>Students</Link></li>
          <li><Link to={`/`}>Home</Link></li>
          <hr />
        </ul>
    </div>
  );
}

/* -------------------<   CONTAINER   >-------------------- */

import { connect } from 'react-redux';

const mapState = null;
const mapDispatch = null;

export default connect(mapState, mapDispatch)(Navbar);

