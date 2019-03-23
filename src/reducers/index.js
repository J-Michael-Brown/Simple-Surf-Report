import reportReducer from './report-reducer';
import selectedDayReducer from './selected-day-reducer';
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
  report: reportReducer,
  dayIndex: selectedDayReducer
});

export default rootReducer;
