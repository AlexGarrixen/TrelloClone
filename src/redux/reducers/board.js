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
} from '../actions/board';

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
      return {
        ...state,
        boardId: action.boardId,
        title: action.title,
        description: action.description,
      };
    case RECEIVE_UPDATE_BOARD:
      return {
        ...state,
        ...action.payload,
      };
    case SELECT_VIEW_CARD:
      return {
        ...state,
        cardModalEditOpen: true,
        cardSelected: action.cardData,
      };
    case UPDATE_CARD_SELECTED:
      return {
        ...state,
        cardSelected: { ...state.cardSelected, ...action.payload },
      };
    case RESET_CARD_SELECTED:
      return {
        ...state,
        cardSelected: {},
      };
    case CLOSE_VIEW_CARD_SELECTED:
      return {
        ...state,
        cardModalEditOpen: false,
        cardSelected: {},
      };
    case TOGGLE_SIDEBAR_MENU:
      return {
        ...state,
        sidebarMenuOpen: action.display,
      };
    case CLEAR_BOARD_ERROR:
      return {
        ...state,
        error: null,
      };
    case RECEIVE_NOT_FOUND:
      return {
        ...state,
        notFound: true,
      };
    case RECEIVE_ERROR:
      return {
        ...state,
        error: action.error,
      };
    case RECEIVE_CARD_ERROR:
      return {
        ...state,
        cardErrors: [...state.cardErrors, action.error],
      };
    case RESET_BOARD:
      return {
        ...initialState,
      };
    default:
      return state;
  }
};

export default boardReducer;
