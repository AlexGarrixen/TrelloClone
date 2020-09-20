import { getBoards } from '../../services/boards';

export const RECEIVE_BOARDS = 'RECEIVE_BOARDS';
export const receiveBoards = (boards) => ({
  type: RECEIVE_BOARDS,
  boards,
});

export const RECEIVE_ERROR = 'RECEIVE_ERROR';
export const receiveError = (message) => ({
  type: RECEIVE_ERROR,
  error: message,
});

export const SET_SHOW_REGISTRATION_MODAL = 'SET_SHOW_REGISTRATION_MODAL';
export const setShowRegistrationModal = (value) => ({
  type: SET_SHOW_REGISTRATION_MODAL,
  value,
});

export const RECEIVE_BOARD_CREATED = 'RECEIVE_BOARD_CREATED';
export const receiveBoardCreated = (board) => ({
  type: RECEIVE_BOARD_CREATED,
  board,
});

const shouldRequestBoards = (state) => {
  const {
    boards: { fetched },
  } = state;

  if (!fetched) return true;
  else return false;
};

export const fetchBoards = () => async (dispatch, getState) => {
  try {
    if (shouldRequestBoards(getState())) {
      const boards = await getBoards();
      dispatch(receiveBoards(boards));
    }
  } catch (e) {
    dispatch(receiveError(e));
  }
};
