import {
  RECEIVE_BOARDS,
  RECEIVE_ERROR,
  RECEIVE_BOARD_CREATED,
  SET_SHOW_REGISTRATION_MODAL,
} from '../actions/boards';

const initialState = {
  data: [],
  isFetching: true,
  fetched: false,
  error: null,
  registrationModalOpen: false,
};

const boardsReducer = (state = initialState, action) => {
  switch (action.type) {
    case RECEIVE_BOARDS:
      return {
        ...state,
        isFetching: false,
        fetched: true,
        data: action.boards,
      };
    case SET_SHOW_REGISTRATION_MODAL:
      return {
        ...state,
        registrationModalOpen: action.value,
      };
    case RECEIVE_BOARD_CREATED:
      return {
        ...state,
        data: [...state.data, action.board],
      };
    case RECEIVE_ERROR:
      return {
        ...state,
        isFetching: false,
        error: action.error,
      };
    default:
      return state;
  }
};

export default boardsReducer;
