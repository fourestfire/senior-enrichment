/* -------------------<   ACTIONS   >--------------------- */

const ADD_STUDENT   = 'ADD_STUDENT';
const RECEIVE_STUDENTS = 'RECEIVE_STUDENTS';

/* ---------------<   ACTION CREATORS   >------------------- */

export const addStudentSync = student => ({ type: ADD_STUDENT, student });
export const receiveStudentsSync = allStudents => ({ type: RECEIVE_STUDENTS, allStudents });

/* -------------------<   REDUCERS   >--------------------- */

let initialState = { allStudents: [] };

export default function students (state = initialState, action) {
  switch (action.type) {
    case ADD_STUDENT:
      return Object.assign({}, state, {allStudents: state.students.allStudents.concat(action.student)});
    case RECEIVE_STUDENTS:
      return Object.assign({}, state, {allStudents: action.allStudents});
    default:
      return state;
  }
}

/* ------------------<   DISPATCHERS   >-------------------- */
import axios from 'axios';

export const addStudent = (obj) => dispatch => {
  axios.post('/api/users/', {
    name: obj.name,
    email: obj.email,
  })
  .then(res => res.data)
  .then(newStudent => dispatch(addStudentSync(newStudent)))
  .catch(err => console.error('dang, we hit an error!', err));
};
// .then(data => console.log(data))

export const receiveStudents = () => dispatch => {
  axios.get('/api/users/')
  .then(res => res.data)
  .then(allStudents => dispatch(receiveStudentsSync(allStudents)))
  .catch(err => console.error('dang, we hit an error!', err));
};
