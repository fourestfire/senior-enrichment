/* -------------------<   COMPONENT   >-------------------- */
import React from 'react';

const Home = () => {
  return (
    <div>
      <p> Home Page with Campuses and Stuff </p>
    </div>
  );
};

/* -------------------<   CONTAINER   >-------------------- */

import { connect } from 'react-redux';

const mapState = null;
const mapDispatch = null;

export default connect(mapState, mapDispatch)(Home);
