import { combineReducers } from 'redux';
import boards from './boards';
import board from './board';

const reducer = combineReducers({
  boards,
  board,
});

export default reducer;
