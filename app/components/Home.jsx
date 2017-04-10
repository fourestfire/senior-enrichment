/* -------------------<   COMPONENT   >-------------------- */
import React from 'react';

class Home extends React.Component {

  componentDidMount () {
    this.props.receiveCampuses();
  }

  render () {
    return (
      <div className="container flexbox-container">
        <div className="jumbotron">
          <p> Home Page with Campuses and Stuff </p>
            <p>
            {
              this.props.campuses.allCampuses.map(campus => {
                return <li key={campus.id}>{campus}</li>;
              })
            }
            </p>
        </div>
      </div>
    );
  }
}

/* -------------------<   CONTAINER   >-------------------- */

import { connect } from 'react-redux';
import receiveCampuses from '../reducers/campus';

const mapState = ({ campuses }) => ({ campuses });
const mapDispatch = ({ receiveCampuses });

export default connect(mapState, mapDispatch)(Home);
