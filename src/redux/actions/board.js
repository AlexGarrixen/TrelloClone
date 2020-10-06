import { isFn, isString, isArray, isObject } from '../../utils/typeOf';
import { getBoards } from '../../services/boards';
import * as boardsActions from './boards';
import * as prevRequestsActions from './prevRequests';
import {
  createList,
  createCard,
  createCardComment,
  createCardLabel,
  updateBoard,
  updateListTitle,
  updateCard,
  updateCardsList,
  updateCardComment,
  deleteList,
  deleteCard,
  deleteCardComment,
  deleteCardLabel,
  deleteCardAttachment,
  deleteBoard,
} from '../../services/board';

const noop = () => {};

export const RECEIVE_ERROR = 'RECEIVE_ERROR';
export const receiveError = (message) => ({
  type: RECEIVE_ERROR,
  error: message,
});

export const RECEIVE_NOT_FOUND = 'RECEIVE_NOT_FOUND';
export const receiveNotFound = () => ({
  type: RECEIVE_NOT_FOUND,
});

export const RECEIVE_CARD_ERROR = 'RECEIVE_CARD_ERROR';
export const receiveCardError = (message) => ({
  type: RECEIVE_CARD_ERROR,
  error: message,
});

export const RECEIVE_BOARD = 'RECEIVE_BOARD';
export const receiveBoard = ({ boardId, title, description }) => ({
  type: RECEIVE_BOARD,
  boardId,
  title,
  description,
});

export const SELECT_VIEW_CARD = 'SELECT_VIEW_CARD';
export const selectViewCard = (cardData) => ({
  type: SELECT_VIEW_CARD,
  cardData,
});

export const CLOSE_VIEW_CARD_SELECTED = 'CLOSE_VIEW_CARD_SELECTED';
export const closeViewCardSelected = () => ({
  type: CLOSE_VIEW_CARD_SELECTED,
});

export const TOGGLE_SIDEBAR_MENU = 'TOGGLE_SIDEBAR_MENU';
export const toggleSidebarMenu = (display) => ({
  type: TOGGLE_SIDEBAR_MENU,
  display,
});

export const RESET_CARD_SELECTED = 'RESET_CARD_SELECTED';
export const resetCardSelected = () => ({
  type: RESET_CARD_SELECTED,
});

export const CLEAR_BOARD_ERROR = 'CLEAR_BOARD_ERROR';
export const clearBoardError = () => ({
  type: CLEAR_BOARD_ERROR,
});

export const RECEIVE_UPDATE_BOARD = 'RECEIVE_UPDATE_BOARD';
export const receiveUpdateBoard = ({ boardId, title, description }) => ({
  type: RECEIVE_UPDATE_BOARD,
  payload: {
    ...(isString(boardId) ? { boardId } : {}),
    ...(isString(title) ? { title } : {}),
    ...(isString(description) ? { description } : {}),
  },
});

export const UPDATE_CARD_SELECTED = 'UPDATE_CARD_SELECTED';
export const updateCardSelected = ({
  _id,
  listId,
  listName,
  title,
  description,
  picture,
  attachments,
  comments,
  labels,
}) => ({
  type: UPDATE_CARD_SELECTED,
  payload: {
    ...(isString(_id) ? { _id } : {}),
    ...(isString(listId) ? { listId } : {}),
    ...(isString(listName) ? { listName } : {}),
    ...(isString(title) ? { title } : {}),
    ...(isString(description) ? { description } : {}),
    ...(isObject(picture) ? { picture } : {}),
    ...(isArray(attachments) ? { attachments } : {}),
    ...(isArray(comments) ? { comments } : {}),
    ...(isArray(labels) ? { labels } : {}),
  },
});

export const RESET_BOARD = 'RESET_BOARD';
export const resetBoard = () => ({
  type: RESET_BOARD,
});

export const fetchBoardLists = (boardId, onSuccessRequest) => async (
  dispatch
) => {
  try {
    const [board] = await getBoards(boardId);

    if (board === undefined) return dispatch(receiveNotFound());

    const { title, description } = board;

    dispatch(prevRequestsActions.receiveBoard(board));
    dispatch(receiveBoard({ boardId, title, description }));
    isFn(onSuccessRequest) && onSuccessRequest();
  } catch (e) {
    dispatch(receiveError(e));
  }
};

export const requestCreateList = (
  boardId,
  data,
  options = { onRequest: noop, onSuccessRequest: noop }
) => async (dispatch) => {
  try {
    isFn(options.onRequest) && options.onRequest();
    const listCreated = await createList(boardId, data);
    isFn(options.onSuccessRequest) && options.onSuccessRequest();

    dispatch(prevRequestsActions.receiveNewBoardList(boardId, listCreated));
  } catch (e) {
    dispatch(receiveError(e));
  }
};

export const requestCreateCard = (
  listId,
  data,
  options = { onRequest: noop, onSuccessRequest: noop }
) => async (dispatch, getState) => {
  const { boardId } = getState().board;

  try {
    isFn(options.onRequest) && options.onRequest();
    const cardCreated = await createCard(listId, data);
    isFn(options.onSuccessRequest) && options.onSuccessRequest();

    dispatch(
      prevRequestsActions.receiveNewBoardCard(boardId, listId, cardCreated)
    );
  } catch (e) {
    dispatch(receiveError(e));
  }
};

export const requestCreateCardComment = (
  newComment,
  options = { onRequest: noop, onSuccessRequest: noop }
) => async (dispatch, getState) => {
  const { cardSelected, boardId } = getState().board;

  try {
    isFn(options.onRequest) && options.onRequest();
    const { newCard } = await createCardComment(cardSelected._id, newComment);
    isFn(options.onSuccessRequest) && options.onSuccessRequest();

    dispatch(updateCardSelected({ comments: newCard.comments }));
    dispatch(
      prevRequestsActions.receiveNewBoardCardComment({
        boardId,
        listId: cardSelected.listId,
        cardId: cardSelected._id,
        newComments: newCard.comments,
      })
    );
  } catch (e) {
    dispatch(receiveCardError(e));
  }
};

export const requestCreateLabel = (
  newLabel,
  options = { onRequest: noop, onSuccessRequest: noop }
) => async (dispatch, getState) => {
  const { cardSelected, boardId } = getState().board;

  try {
    isFn(options.onRequest) && options.onRequest();
    const { newCard } = await createCardLabel(cardSelected._id, newLabel);
    isFn(options.onSuccessRequest) && options.onSuccessRequest();

    dispatch(updateCardSelected({ labels: newCard.labels }));
    dispatch(
      prevRequestsActions.receiveNewBoardCardLabel({
        boardId,
        listId: cardSelected.listId,
        cardId: cardSelected._id,
        newLabels: newCard.labels,
      })
    );
  } catch (e) {
    dispatch(receiveCardError(e));
  }
};

export const requestUpdateBoardTitle = (newTitle) => async (
  dispatch,
  getState
) => {
  const { boardId } = getState().board;

  try {
    const { title } = await updateBoard(boardId, { title: newTitle });
    dispatch(receiveUpdateBoard({ title }));
    dispatch(prevRequestsActions.receiveNewBoardTitle(boardId, title));
  } catch (e) {
    dispatch(receiveError(e));
  }
};

export const requestUpdateBoardDescription = (
  newDesc,
  options = { onRequest: noop, onSuccessRequest: noop }
) => async (dispatch, getState) => {
  const { boardId } = getState().board;

  try {
    isFn(options.onRequest) && options.onRequest();
    const { description } = await updateBoard(boardId, {
      description: newDesc,
    });
    isFn(options.onSuccessRequest) && options.onSuccessRequest();

    dispatch(receiveUpdateBoard({ description }));
    dispatch(
      prevRequestsActions.receiveNewBoardDescription(boardId, description)
    );
  } catch (e) {
    dispatch(receiveError(e));
  }
};

export const requestUpdateCardTitle = (
  newTitle,
  options = { onRequest: noop, onSuccessRequest: noop }
) => async (dispatch, getState) => {
  const { board } = getState();
  const { cardSelected, boardId } = board;

  try {
    isFn(options.onRequest) && options.onRequest();
    const { newCard } = await updateCard(cardSelected._id, { title: newTitle });
    isFn(options.onSuccessRequest) && options.onSuccessRequest();

    dispatch(updateCardSelected({ title: newCard.title }));
    dispatch(
      prevRequestsActions.receiveNewBoardCardTitle({
        boardId,
        listId: cardSelected.listId,
        cardId: cardSelected._id,
        newTitle,
      })
    );
  } catch (e) {
    dispatch(receiveCardError(e));
  }
};

export const requestUpdateDescription = (
  newDescription,
  options = { onRequest: noop, onSuccessRequest: noop }
) => async (dispatch, getState) => {
  const { board } = getState();
  const { cardSelected, boardId } = board;

  try {
    isFn(options.onRequest) && options.onRequest();
    const { newCard } = await updateCard(cardSelected._id, {
      description: newDescription,
    });
    isFn(options.onSuccessRequest) && options.onSuccessRequest();

    dispatch(updateCardSelected({ description: newCard.description }));
    dispatch(
      prevRequestsActions.receiveNewBoardCardDesc({
        boardId,
        listId: cardSelected.listId,
        cardId: cardSelected._id,
        newDescription,
      })
    );
  } catch (e) {
    dispatch(receiveCardError(e));
  }
};

export const requestUpdateListTitle = (
  listId,
  newTitle,
  options = { onRequest: noop, onSuccessRequest: noop }
) => async (dispatch, getState) => {
  const { boardId } = getState().board;

  try {
    isFn(options.onRequest) && options.onRequest();
    const newList = await updateListTitle(listId, newTitle);
    isFn(options.onSuccessRequest) && options.onSuccessRequest();

    dispatch(
      prevRequestsActions.receiveBoardListTitleUpdated({
        boardId,
        listId,
        newTitle: newList.title,
      })
    );
  } catch (e) {
    dispatch(receiveError(e));
  }
};

export const requestUpdateListsOnDrop = (newLists) => async (
  dispatch,
  getState
) => {
  const { boardId } = getState().board;
  const newListsId = newLists.map(({ _id }) => _id);

  try {
    await updateBoard(boardId, { lists: newListsId });
    dispatch(prevRequestsActions.receiveBoardListsUpdated(boardId, newLists));
  } catch (e) {
    dispatch(receiveError(e));
  }
};

export const requestUpdateListOnDrop = (listId, cards) => async (
  dispatch,
  getState
) => {
  const state = getState();
  const { boardId } = state.board;
  const cardsId = cards.map(({ _id }) => _id);

  try {
    await updateCardsList(listId, cardsId);
    dispatch(
      prevRequestsActions.receiveBoardListCardsUpdated({
        boardId,
        listId,
        newCards: cards,
      })
    );
  } catch (e) {
    dispatch(receiveError(e));
  }
};

export const requestUpdateCardOnDrop = (cardId, data) => async (dispatch) => {
  try {
    await updateCard(cardId, data);
  } catch (e) {
    dispatch(receiveCardError(e));
  }
};

export const requestUpdateCardPicture = (
  { path, publicId },
  options = { onRequest: noop, onSuccessRequest: noop }
) => async (dispatch, getState) => {
  const state = getState();
  const { cardSelected, boardId } = state.board;

  try {
    isFn(options.onRequest) && options.onRequest();
    const { newCard } = await updateCard(cardSelected._id, {
      picture: { path, publicId },
    });
    isFn(options.onSuccessRequest) && options.onSuccessRequest();

    dispatch(updateCardSelected({ picture: newCard.picture }));
    dispatch(
      prevRequestsActions.receiveBoardCardPictureUpdated({
        boardId,
        listId: cardSelected.listId,
        cardId: cardSelected._id,
        newPicture: newCard.picture,
      })
    );
  } catch (e) {
    dispatch(receiveCardError(e));
  }
};

export const requestUpdateCardComment = (
  commentId,
  newComment,
  options = { onRequest: noop, onSuccessRequest: noop }
) => async (dispatch, getState) => {
  const { cardSelected, boardId } = getState().board;

  try {
    isFn(options.onRequest) && options.onRequest();
    const { newCard } = await updateCardComment(
      cardSelected._id,
      commentId,
      newComment
    );
    isFn(options.onSuccessRequest) && options.onSuccessRequest();

    dispatch(updateCardSelected({ comments: newCard.comments }));
    dispatch(
      prevRequestsActions.receiveBoardCardCommentUpdated({
        boardId,
        listId: cardSelected.listId,
        cardId: cardSelected._id,
        newComments: newCard.comments,
      })
    );
  } catch (e) {
    dispatch(receiveCardError(e));
  }
};

export const requestDeleteList = (
  listId,
  options = {
    onRequest: noop,
    onSuccessRequest: noop,
  }
) => async (dispatch, getState) => {
  const { board } = getState();
  const { boardId } = board;

  try {
    isFn(options.onRequest) && options.onRequest();
    await deleteList(listId);
    isFn(options.onSuccessRequest) && options.onSuccessRequest();

    dispatch(prevRequestsActions.receiveBoardListDeleted(boardId, listId));
  } catch (e) {
    dispatch(receiveError(e));
  }
};

export const requestDeleteComment = (
  commentId,
  options = { onRequest: noop, onSuccessRequest: noop }
) => async (dispatch, getState) => {
  const { cardSelected, boardId } = getState().board;

  try {
    isFn(options.onRequest) && options.onRequest();
    const { newCard } = await deleteCardComment(cardSelected._id, commentId);
    isFn(options.onSuccessRequest) && options.onSuccessRequest();

    dispatch(updateCardSelected({ comments: newCard.comments }));
    dispatch(
      prevRequestsActions.receiveBoardCardCommentDeleted({
        boardId,
        listId: cardSelected.listId,
        cardId: cardSelected._id,
        commentId,
      })
    );
  } catch (e) {
    dispatch(receiveCardError(e));
  }
};

export const requestDeleteLabel = (labelId) => async (dispatch, getState) => {
  const { cardSelected, boardId } = getState().board;

  try {
    const { newCard } = await deleteCardLabel(cardSelected._id, labelId);

    dispatch(updateCardSelected({ labels: newCard.labels }));
    dispatch(
      prevRequestsActions.receiveBoardCardLabelDeleted({
        boardId,
        listId: cardSelected.listId,
        cardId: cardSelected._id,
        newLabels: newCard.labels,
      })
    );
  } catch (e) {
    dispatch(receiveCardError(e));
  }
};

export const requestDeleteCard = (
  options = { onRequest: noop, onSuccessRequest: noop }
) => async (dispatch, getState) => {
  const { cardSelected, boardId } = getState().board;

  try {
    isFn(options.onRequest) && options.onRequest();
    await deleteCard(cardSelected._id);
    isFn(options.onSuccessRequest) && options.onSuccessRequest();

    dispatch(closeViewCardSelected());
    dispatch(resetCardSelected());
    dispatch(
      prevRequestsActions.receiveBoardCardDeleted({
        boardId,
        listId: cardSelected.listId,
        cardId: cardSelected._id,
      })
    );
  } catch (e) {
    dispatch(receiveError(e));
  }
};

export const getAttachmentUploaded = ({ path, publicId }, newAttachments) => (
  dispatch,
  getState
) => {
  const state = getState();
  const { boardId, cardSelected } = state.board;

  dispatch(
    updateCardSelected({
      picture: { path, publicId },
      attachments: newAttachments,
    })
  );
  dispatch(
    prevRequestsActions.receiveBoardCardPicture({
      boardId,
      listId: cardSelected.listId,
      cardId: cardSelected._id,
      picture: { path, publicId },
      newAttachments,
    })
  );
};

export const requestDeleteAttachment = (
  publicIdAttachment,
  options = { onRequest: noop, onSuccessRequest: noop }
) => async (dispatch, getState) => {
  const state = getState();
  const {
    board: { cardSelected, boardId },
  } = state;

  try {
    isFn(options.onRequest) && options.onRequest();
    const { newCard } = await deleteCardAttachment(
      cardSelected._id,
      publicIdAttachment
    );
    isFn(options.onSuccessRequest) && options.onSuccessRequest();

    dispatch(updateCardSelected(newCard));
    dispatch(
      prevRequestsActions.receiveBoardCardPictureDelted({
        boardId,
        listId: cardSelected.listId,
        cardId: cardSelected._id,
        newCard,
      })
    );
  } catch (e) {
    dispatch(receiveCardError(e));
  }
};

export const requestDeleteBoard = (
  options = { onRequest: noop, onSuccessRequest: noop }
) => async (dispatch, getState) => {
  const { boardId } = getState().board;
  const { data } = getState().boards;

  try {
    isFn(options.onRequest) && options.onRequest();
    await deleteBoard(boardId);
    const newBoards = data.filter((board) => board._id !== boardId);

    dispatch(resetBoard());
    dispatch(prevRequestsActions.receiveBoardDeleted(boardId));
    dispatch(boardsActions.updateBoards(newBoards));
    isFn(options.onSuccessRequest) && options.onSuccessRequest();
  } catch (e) {
    dispatch(receiveError(e));
  }
};
