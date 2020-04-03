import { combineReducers } from 'redux';
import listCourses from './courses/reducers';

const rootReducer = combineReducers({
    ListCourses : listCourses
})

export default rootReducer;