import * as actions from '../../actions/requestedBoard';
import * as handlers from './handlers';

const initialState = {
  byId: {},
};

const requestedBoardReducer = (state = initialState, action) => {
  switch (action.type) {
    case actions.RECEIVE_BOARD:
      return handlers.addBoard(state, action);
    case actions.RECEIVE_UPDATED_LISTS_OF_BOARD:
      return handlers.updateListOfBoard(state, action);
    case actions.RECEIVE_UPDATED_TITLE_OF_BOARD:
      return handlers.updateTitleOfBoard(state, action);
    case actions.RECEIVE_UPDATED_DESC_OF_BOARD:
      return handlers.updateDescriptionOfBoard(state, action);
    case actions.RECEIVE_DELETED_BOARD:
      return handlers.deleteBoard(state, action);
    default:
      return state;
  }
};

export default requestedBoardReducer;
