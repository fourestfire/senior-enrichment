/* -------------------<   COMPONENT   >-------------------- */
import React from 'react';

class Students extends React.Component {
  constructor(props) {
    super(props);
    this.submitStudent = this.submitStudent.bind(this);
  }

  submitStudent(event) {
  event.preventDefault();
  console.log(event.target.name.value);
  let student =
    {
      name: event.target.name.value,
      email: event.target.email.value,
    }
  this.props.addStudent(student);
  }

  render () {
    console.log(this.props.addStudent)
    return (
      <div className="container flexbox-container">
        <div className="jumbotron">
          <p> Cool Students Page </p>
          {

          }
          <h5> Add a student below: </h5>
              <form onSubmit={this.submitStudent}>
                Name:<br />
                <input type="text" name="name" />
                <br />
                Email:<br />
                <input type="email" name="email" />
                <br /><br />
                <input type="submit" value="Submit" />
              </form>
        </div>
      </div>
    );
  }
}

// need to refactor so that campus is a dropdown
              // Campus:<br />
              // <input type="text" name="campus" />
              // <br />

/* -------------------<   CONTAINER   >-------------------- */

import { connect } from 'react-redux';
import addStudent from '../reducers/student';

const mapState = null;
const mapDispatch = ({ addStudent });

export default connect(mapState, mapDispatch)(Students);
