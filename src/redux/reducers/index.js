import { combineReducers } from 'redux';
import boards from './boards';
import board from './board';
import requestedBoard from './requestedBoard';
import lists from './lists';
import cards from './cards';

const reducer = combineReducers({
  boards,
  board,
  requestedBoard,
  lists,
  cards,
});

export default reducer;
