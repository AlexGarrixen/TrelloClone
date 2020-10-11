import * as handlers from './handlers';
import * as actions from '../../actions/board';

const initialState = {
  _id: '',
  title: '',
  description: '',
  picture: {},
  lists: [],
  cardSelected: '',
  sidebarMenuOpen: false,
  error: null,
  cardErrors: [],
  notFound: false,
};

const boardReducer = (state = initialState, action) => {
  switch (action.type) {
    case actions.RECEIVE_BOARD:
      return handlers.setBoard(state, action);
    case actions.RECEIVE_PREVIOUS_REQUESTED_BOARD:
      return handlers.setBoard(state, action);
    case actions.RECEIVE_UPDATED_LISTS:
      return handlers.updateLists(state, action);
    case actions.RECEIVE_UPDATED_TITLE:
      return handlers.updateTitle(state, action);
    case actions.RECEIVE_UPDATED_DESCRIPTION:
      return handlers.updateDescription(state, action);
    case actions.RECEIVE_UPDATED_PICTURE:
      return handlers.updatePicture(state, action);
    case actions.SELECT_CARD:
      return handlers.setSelectedCard(state, action);
    case actions.REMOVE_SELECTED_CARD:
      return handlers.removeSelectedCard(state);
    case actions.TOGGLE_SIDEBAR_MENU:
      return handlers.toggleSidebarMenu(state, action);
    case actions.CLEAR_BOARD_ERROR:
      return handlers.clearBoardError(state);
    case actions.RECEIVE_NOT_FOUND:
      return handlers.setNotFound(state);
    case actions.RECEIVE_ERROR:
      return handlers.setError(state, action);
    case actions.RECEIVE_CARD_ERROR:
      return handlers.setCardError(state, action);
    case actions.RESET_BOARD:
      return initialState;
    default:
      return state;
  }
};

export default boardReducer;
