export const RECEIVE_BOARD = 'REQUESTED_BOARD:RECEIVE_BOARD';
export const receiveBoard = (board) => ({
  type: RECEIVE_BOARD,
  board,
});

export const RECEIVE_UPDATED_LISTS_OF_BOARD =
  'REQUESTED_BOARD:RECEIVE_UPDATED_LISTS_OF_BOARD';
export const receiveUpdatedListsOfBoard = (boardId, newLists) => ({
  type: RECEIVE_UPDATED_LISTS_OF_BOARD,
  boardId,
  newLists,
});

export const RECEIVE_UPDATED_TITLE_OF_BOARD =
  'REQUESTED_BOARD:RECEIVE_UPDATED_TITLE_OF_BOARD';
export const receiveUpdatedTitleOfBoard = (boardId, newTitle) => ({
  type: RECEIVE_UPDATED_TITLE_OF_BOARD,
  boardId,
  newTitle,
});

export const RECEIVE_UPDATED_DESC_OF_BOARD =
  'REQUESTED_BOARD:RECEIVE_UPDATED_DESC_OF_BOARD';
export const receiveUpdatedDescOfBoard = (boardId, newDescription) => ({
  type: RECEIVE_UPDATED_DESC_OF_BOARD,
  boardId,
  newDescription,
});

export const RECEIVE_DELETED_BOARD = 'REQUESTED_BOARD:RECEIVE_DELETED_BOARD';
export const receiveDeletedBoard = (boardId) => ({
  type: RECEIVE_DELETED_BOARD,
  boardId,
});
