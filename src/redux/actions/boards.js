import { getBoards } from '../../services/boards';

export const RECEIVE_BOARDS = 'BOARDS:RECEIVE_BOARDS';
export const receiveBoards = (boards) => ({
  type: RECEIVE_BOARDS,
  boards,
});

export const RECEIVE_ERROR = 'BOARDS:RECEIVE_ERROR';
export const receiveError = (message) => ({
  type: RECEIVE_ERROR,
  error: message,
});

export const SET_SHOW_REGISTRATION_MODAL = 'BOARDS:SET_SHOW_REGISTRATION_MODAL';
export const setShowRegistrationModal = (value) => ({
  type: SET_SHOW_REGISTRATION_MODAL,
  value,
});

export const RECEIVE_BOARD_CREATED = 'BOARDS:RECEIVE_BOARD_CREATED';
export const receiveBoardCreated = (board) => ({
  type: RECEIVE_BOARD_CREATED,
  board,
});

export const RECEIVE_DELETED_BOARD = 'BOARDS:RECEIVE_DELETED_BOARD';
export const receiveDeletedBoard = (boardId) => ({
  type: RECEIVE_DELETED_BOARD,
  deletedBoardId: boardId,
});

export const RECEIVE_UPDATED_PICTURE_OF_BOARD =
  'BOARDS:RECEIVE_UPDATED_PICTURE_OF_BOARD';
export const receiveUpdatedPictureOfBoard = (boardId, newPicture) => ({
  type: RECEIVE_UPDATED_PICTURE_OF_BOARD,
  boardId,
  newPicture,
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
