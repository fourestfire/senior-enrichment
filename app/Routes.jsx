/* -------------------<    COMPONENT   >------------------- */
import React from 'react';

import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from './components/Home';
import Students from './components/Students';

const Routes = () => {
  return (
    <Router>
      <div>
        <Route exact path="/" component={Home}  />
        <Route path="/students" component={Students} />
        <Route path="*" component={Home} />
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
