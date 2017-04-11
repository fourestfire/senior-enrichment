/* -------------------<   COMPONENT   >-------------------- */
import React from 'react';

class Students extends React.Component {
  constructor(props) {
    super(props);
    this.submitStudent = this.submitStudent.bind(this);
  }

  componentDidMount () {
    this.props.receiveStudents();
    this.props.receiveCampuses();
  }

  // componentDidReceiveProps

  submitStudent(event) {
    event.preventDefault();
    let student = { name: event.target.name.value, email: event.target.email.value, campusId: event.target.campusId.value };
    this.props.addStudent(student);
  }

  render () {
    return (
      <div>
        <p> A Separate Page with All the Students </p>
          <table>
            <thead>
            <tr>
              <th>Student #</th>
              <th>Student Name</th>
              <th>Campus #</th>
              <th>Campus Name</th>
            </tr>
            </thead>
            <tbody>
              {
                this.props.students.allStudents.map(student => {
                  return (
                    <tr key={student.id}>
                      <td>{student.id}</td>
                      <td>{student.name}</td>
                      <td>{student.campus.id}</td>
                      <td>{student.campus.name}</td>
                    </tr>
                  );
                })
              }
            </tbody>
          </table>

        <br />
        <br />

        <h5> Add a new student below: </h5>
            <form onSubmit={this.submitStudent}>
              Name:<br />
                <input type="text" name="name" />
                <br />
              Email:<br />
                <input type="email" name="email" />
                <br />
              Campus:<br />
                <select name="campusId">
                  {
                    this.props.campuses.allCampuses.map(campus => {
                      return <option key={campus.id} value={campus.id}>{campus.name}</option>;
                    })
                   }
                </select>
                <br />
                <br />
              <input type="submit" value="Submit" />
            </form>
      </div>
    );
  }
}

/* -------------------<   CONTAINER   >-------------------- */

import { connect } from 'react-redux';
import { addStudent, receiveStudents } from '../reducers/student';
import { receiveCampuses } from '../reducers/campus';

const mapState = ({ students, campuses }) => ({ students, campuses });
const mapDispatch = ({ addStudent, receiveStudents, receiveCampuses });

export default connect(mapState, mapDispatch)(Students);
