/* -------------------<   COMPONENT   >-------------------- */
import React from 'react';

const Students = () => {
  return (
    <div>
      <p> Cool Students Page </p>
    </div>
  );
};

/* -------------------<   CONTAINER   >-------------------- */

import { connect } from 'react-redux';

const mapState = null;
const mapDispatch = null;

export default connect(mapState, mapDispatch)(Students);
