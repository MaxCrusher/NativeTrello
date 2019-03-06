import { combineReducers } from 'redux';
import tasks from './tasks';
// import users from './users';
import actualType from './actualType';
import types from './types';
import comments from './comments';
import actualUser from './actualUser';

const rootReducer = combineReducers({ tasks, types, comments, actualUser, actualType });
export default rootReducer;
