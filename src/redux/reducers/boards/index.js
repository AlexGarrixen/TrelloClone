import * as actions from '../../actions/boards';
import * as handlers from './handlers';

const initialState = {
  data: [],
  isFetching: true,
  fetched: false,
  error: null,
  showRegistrationForm: false,
};

const boardsReducer = (state = initialState, action) => {
  switch (action.type) {
    case actions.RECEIVE_BOARDS:
      return handlers.setBoards(state, action);
    case actions.SET_SHOW_REGISTRATION_MODAL:
      return handlers.setVisibilityRegistrationForm(state, action);
    case actions.RECEIVE_BOARD_CREATED:
      return handlers.addCreatedBoard(state, action);
    case actions.RECEIVE_DELETED_BOARD:
      return handlers.deleteBoard(state, action);
    case actions.RECEIVE_ERROR:
      return handlers.setError(state, action);
    default:
      return state;
  }
};

export default boardsReducer;
