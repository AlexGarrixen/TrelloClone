import * as handlers from './handlers';
import {
  RECEIVE_NOT_FOUND,
  RECEIVE_ERROR,
  RECEIVE_CARD_ERROR,
  RECEIVE_BOARD,
  RECEIVE_UPDATE_BOARD,
  SELECT_VIEW_CARD,
  CLOSE_VIEW_CARD_SELECTED,
  UPDATE_CARD_SELECTED,
  RESET_CARD_SELECTED,
  TOGGLE_SIDEBAR_MENU,
  CLEAR_BOARD_ERROR,
  RESET_BOARD,
} from '../../actions/board';

const initialState = {
  boardId: '',
  title: '',
  description: '',
  cardSelected: {},
  cardModalEditOpen: false,
  sidebarMenuOpen: false,
  error: null,
  cardErrors: [],
  notFound: false,
};

const boardReducer = (state = initialState, action) => {
  switch (action.type) {
    case RECEIVE_BOARD:
      return handlers.setBoard(state, action);
    case RECEIVE_UPDATE_BOARD:
      return handlers.updateBoard(state, action);
    case SELECT_VIEW_CARD:
      return handlers.setSelectedCard(state, action);
    case UPDATE_CARD_SELECTED:
      return handlers.updateCardSelected(state, action);
    case RESET_CARD_SELECTED:
      return handlers.resetSelectedCard(state);
    case CLOSE_VIEW_CARD_SELECTED:
      return handlers.closeSelectedCard(state);
    case TOGGLE_SIDEBAR_MENU:
      return handlers.toggleSidebarMenu(state, action);
    case CLEAR_BOARD_ERROR:
      return handlers.clearBoardError(state);
    case RECEIVE_NOT_FOUND:
      return handlers.setNotFound(state);
    case RECEIVE_ERROR:
      return handlers.setError(state, action);
    case RECEIVE_CARD_ERROR:
      return handlers.setCardError(state, action);
    case RESET_BOARD:
      return {
        ...initialState,
      };
    default:
      return state;
  }
};

export default boardReducer;
