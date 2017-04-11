/* -------------------<    COMPONENT   >------------------- */
import React from 'react';

import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from './components/Home';
import Students from './components/Students';
import Campus from './components/Campus';
import Navbar from './components/Navbar';

const Routes = () => {
  return (
    <Router>
      <div className="container flexbox-container">
        <div className="jumbotron">
          <Route path="*" component={Navbar} />
          <Route exact path="/" component={Home}  />
          <Route path="/students" component={Students} />
          <Route path="/campuses/:campusId" component={Campus} />
        </div>
      </div>
    </Router>
  );
};

/* -------------------<   CONTAINER   >-------------------- */

import { connect } from 'react-redux';

const mapState = null;
const mapDispatch = null;

// onEnter is defunct as of react-router 4.0, rendering the below code non-functional

// import receiveStudents from './reducers/student';
// import receiveCampuses from './reducers/campus';
// onEnter={getInitialData}
// const mapDispatch = dispatch => ({
//   getInitialData: () => {
//     console.log('getting initial data');
//     dispatch(receiveStudents());
//     dispatch(receiveCampuses());
//   }
// });

export default connect(mapState, mapDispatch)(Routes);
