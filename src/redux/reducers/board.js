import {
  RECEIVE_NOT_FOUND,
  RECEIVE_ERROR,
  RECEIVE_CARD_ERROR,
  RECEIVE_BOARD_LISTS,
  RECEIVE_UPDATE_BOARD,
  RECEIVE_DELETED_BOARD,
  SELECT_VIEW_CARD,
  CLOSE_VIEW_CARD_SELECTED,
  UPDATE_PREV_REQUESTS,
  UPDATE_CARD_SELECTED,
  RESET_CARD_SELECTED,
  TOGGLE_SIDEBAR_MENU,
  CLEAR_BOARD_ERROR,
} from '../actions/board';

const initialState = {
  boardId: '',
  title: '',
  description: '',
  cardSelected: {},
  prevRequests: {},
  cardModalEditOpen: false,
  sidebarMenuOpen: false,
  error: null,
  cardErrors: [],
  notFound: false,
};

const boardReducer = (state = initialState, action) => {
  switch (action.type) {
    case RECEIVE_BOARD_LISTS:
      return {
        ...state,
        boardId: action.boardId,
        title: action.title,
        description: action.description,
        prevRequests: {
          ...state.prevRequests,
          [action.boardId]: {
            boardId: action.boardId,
            title: action.title,
            description: action.description,
            lists: action.lists,
          },
        },
      };
    case RECEIVE_UPDATE_BOARD:
      return {
        ...state,
        ...action.payload,
      };
    case RECEIVE_DELETED_BOARD:
      return {
        ...state,
        boardId: '',
        title: '',
        description: '',
        prevRequests: action.newPrevRequests,
      };
    case UPDATE_PREV_REQUESTS:
      return {
        ...state,
        prevRequests: action.newPrevRequests,
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
    default:
      return state;
  }
};

export default boardReducer;
