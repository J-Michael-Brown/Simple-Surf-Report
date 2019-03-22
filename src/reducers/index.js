import surfListReducer from './surf-list-reducer';
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
  surfList: surfListReducer
});

export default rootReducer;
