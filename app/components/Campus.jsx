/* -------------------<   COMPONENT   >-------------------- */
import React from 'react';
import { Link } from 'react-router-dom';

class Campus extends React.Component {

  componentDidMount () {
    this.props.receiveSomeStudents(this.props.match.params.campusId);
  }

  render () {
    return (
      <div>
        <p>Students Registered for Campus {this.props.match.params.campusId}</p>
          <p>
            {
              this.props.students.allStudents.map(student => {
                return (
                  <li key={student.id}>
                      {student.name}
                  </li>
                );
              })
            }
          </p>
      </div>
    );
  }
}

/* -------------------<   CONTAINER   >-------------------- */

import { connect } from 'react-redux';
import { receiveSomeStudents } from '../reducers/student'; // not having this in brackets is a horrible idea

const mapState = ({ students, campuses }) => ({ students, campuses });
const mapDispatch = ({ receiveSomeStudents });

export default connect(mapState, mapDispatch)(Campus);
