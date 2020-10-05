import { combineReducers } from 'redux';
import boards from './boards';
import board from './board';
import prevRequests from './prevRequests';

const reducer = combineReducers({
  boards,
  board,
  prevRequests,
});

export default reducer;
