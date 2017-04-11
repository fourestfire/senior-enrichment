/* -------------------<   COMPONENT   >-------------------- */
import React from 'react';
import { Link } from 'react-router-dom';

class Home extends React.Component {

  componentDidMount () {
    this.props.receiveCampuses();
  }

  render () {
    return (
      <div>
        <p> Home Page with Campuses and Stuff </p>
          <p>
            {
              this.props.campuses.allCampuses.map(campus => {
                return <li key={campus.id}>Campus {campus.id}:&nbsp;&nbsp;
                  <Link to={`/campuses/${campus.id}`}>{campus.name}</Link>
                  </li>;
              })
            }
          </p>
      </div>
    );
  }
}

/* -------------------<   CONTAINER   >-------------------- */

import { connect } from 'react-redux';
import { receiveCampuses } from '../reducers/campus'; // not having this in brackets is a horrible idea

const mapState = ({ campuses }) => ({ campuses });
const mapDispatch = ({ receiveCampuses });

export default connect(mapState, mapDispatch)(Home);
