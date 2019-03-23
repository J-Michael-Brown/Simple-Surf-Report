import reportReducer from './report-reducer';
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
  report: reportReducer
});

export default rootReducer;
