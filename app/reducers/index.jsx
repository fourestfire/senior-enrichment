import { combineReducers } from 'redux';
import students from './student';
import campuses from './campus';

const initialState = {};

const rootReducer = function(state = initialState, action) {
  switch (action.type) {
    default: return state;
  }
};

export default combineReducers({ rootReducer, students, campuses });

