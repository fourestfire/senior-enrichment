/* -------------------<    COMPONENT   >------------------- */
import React from 'react';

import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from './components/Home';
import Students from './components/Students';

const Routes = () => {
  return (
    <Router>
      <div>
        <Route exact path="/" component={Home} />
        <Route path="/students" component={Students} />
      </div>
    </Router>
  );
};

/* -------------------<   CONTAINER   >-------------------- */

import { connect } from 'react-redux';

const mapState = null;
const mapDispatch = null;

export default connect(mapState, mapDispatch)(Routes);
