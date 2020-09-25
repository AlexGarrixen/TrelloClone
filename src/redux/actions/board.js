import { isFn } from '../../utils/typeOf';
import { getBoards } from '../../services/boards';
import { updateBoards } from './boards';
import {
  getBoardLists,
  createList,
  createCard,
  createCardComment,
  createCardLabel,
  updateBoard,
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

export const RECEIVE_BOARD_LISTS = 'RECEIVE_BOARD_LISTS';
export const receiveBoardLists = ({ boardId, title, description, lists }) => ({
  type: RECEIVE_BOARD_LISTS,
  boardId,
  title,
  description,
  lists,
});

export const UPDATE_PREV_REQUESTS = 'UPDATE_PREV_REQUESTS';
export const updatePrevRequests = (newPrevRequests) => ({
  type: UPDATE_PREV_REQUESTS,
  newPrevRequests,
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
export const receiveUpdateBoard = ({ title, description }) => ({
  type: RECEIVE_UPDATE_BOARD,
  payload: {
    ...(title ? { title } : {}),
    ...(description ? { description } : {}),
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
    ...(_id ? { _id } : {}),
    ...(listId ? { listId } : {}),
    ...(listName ? { listName } : {}),
    ...(title ? { title } : {}),
    ...(description ? { description } : {}),
    ...(picture ? { picture } : {}),
    ...(attachments ? { attachments } : {}),
    ...(comments ? { comments } : {}),
    ...(labels ? { labels } : {}),
  },
});

export const RECEIVE_DELETED_BOARD = 'RECEIVE_DELETED_BOARD';
export const receiveDeletedBoard = (boardId, newPrevRequests) => ({
  type: RECEIVE_DELETED_BOARD,
  boardId,
  newPrevRequests,
});

export const fetchBoardLists = (boardId, onSuccessRequest) => async (
  dispatch
) => {
  try {
    const [board] = await getBoards(boardId);
    if (board === undefined) return dispatch(receiveNotFound());
    const lists = await getBoardLists(boardId);
    const { title, description } = board;

    dispatch(receiveBoardLists({ boardId, title, description, lists }));
    isFn(onSuccessRequest) && onSuccessRequest();
  } catch (e) {
    dispatch(receiveError(e));
  }
};

export const requestCreateList = (
  boardId,
  data,
  options = { onRequest: noop, onSuccessRequest: noop }
) => async (dispatch, getState) => {
  const { board } = getState();
  const { prevRequests } = board;

  try {
    isFn(options.onRequest) && options.onRequest();
    const listCreated = await createList(boardId, data);
    isFn(options.onSuccessRequest) && options.onSuccessRequest();

    const newPrevRequests = { ...prevRequests };
    const currentLists = newPrevRequests[boardId];
    newPrevRequests[boardId] = [...currentLists, listCreated];

    dispatch(updatePrevRequests(newPrevRequests));
  } catch (e) {
    dispatch(receiveError(e));
  }
};

export const requestCreateCard = (
  listId,
  data,
  options = { onRequest: noop, onSuccessRequest: noop }
) => async (dispatch, getState) => {
  const { board } = getState();
  const { prevRequests, boardId } = board;

  try {
    isFn(options.onRequest) && options.onRequest();
    const cardCreated = await createCard(listId, data);
    isFn(options.onSuccessRequest) && options.onSuccessRequest();

    const newPrevRequests = { ...prevRequests };
    const lists = newPrevRequests[boardId];
    const list = lists.find((list) => list._id === listId);
    list.cards = [...list.cards, cardCreated];

    dispatch(updatePrevRequests(newPrevRequests));
  } catch (e) {
    dispatch(receiveError(e));
  }
};

export const requestCreateCardComment = (
  newComment,
  options = { onRequest: noop, onSuccessRequest: noop }
) => async (dispatch, getState) => {
  const { cardSelected, prevRequests, boardId } = getState().board;

  try {
    isFn(options.onRequest) && options.onRequest();
    const { newCard } = await createCardComment(cardSelected._id, newComment);
    isFn(options.onSuccessRequest) && options.onSuccessRequest();

    const newPrevRequests = { ...prevRequests };
    const lists = newPrevRequests[boardId];
    const list = lists.find((list) => list._id === cardSelected.listId);
    const card = list.cards.find((card) => card._id === cardSelected._id);
    card.comments = newCard.comments;

    dispatch(updateCardSelected({ comments: newCard.comments }));
    dispatch(updatePrevRequests(newPrevRequests));
  } catch (e) {
    dispatch(receiveCardError(e));
  }
};

export const requestCreateLabel = (
  newLabel,
  options = { onRequest: noop, onSuccessRequest: noop }
) => async (dispatch, getState) => {
  const { cardSelected, prevRequests, boardId } = getState().board;

  try {
    isFn(options.onRequest) && options.onRequest();
    const { newCard } = await createCardLabel(cardSelected._id, newLabel);
    isFn(options.onSuccessRequest) && options.onSuccessRequest();

    const newPrevRequests = { ...prevRequests };
    const lists = newPrevRequests[boardId];
    const list = lists.find((list) => list._id === cardSelected.listId);
    const card = list.cards.find((card) => card._id === cardSelected._id);
    card.labels = newCard.labels;

    dispatch(updateCardSelected({ labels: newCard.labels }));
    dispatch(updatePrevRequests(newPrevRequests));
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
  } catch (e) {
    dispatch(receiveError(e));
  }
};

export const requestUpdateCardTitle = (
  newTitle,
  options = { onRequest: noop, onSuccessRequest: noop }
) => async (dispatch, getState) => {
  const { board } = getState();
  const { cardSelected, prevRequests, boardId } = board;

  try {
    isFn(options.onRequest) && options.onRequest();
    const { newCard } = await updateCard(cardSelected._id, { title: newTitle });
    isFn(options.onSuccessRequest) && options.onSuccessRequest();

    const newPrevRequests = { ...prevRequests };
    const lists = newPrevRequests[boardId];
    const list = lists.find((list) => list._id === cardSelected.listId);
    const card = list.cards.find((card) => card._id === cardSelected._id);
    card.title = newCard.title;

    dispatch(updateCardSelected({ title: newCard.title }));
    dispatch(updatePrevRequests(newPrevRequests));
  } catch (e) {
    dispatch(receiveCardError(e));
  }
};

export const requestUpdateDescription = (
  newDescription,
  options = { onRequest: noop, onSuccessRequest: noop }
) => async (dispatch, getState) => {
  const { board } = getState();
  const { cardSelected, prevRequests, boardId } = board;

  try {
    isFn(options.onRequest) && options.onRequest();
    const { newCard } = await updateCard(cardSelected._id, {
      description: newDescription,
    });
    isFn(options.onSuccessRequest) && options.onSuccessRequest();

    const newPrevRequests = { ...prevRequests };
    const lists = newPrevRequests[boardId];
    const list = lists.find((list) => list._id === cardSelected.listId);
    const card = list.cards.find((card) => card._id === cardSelected._id);
    card.description = newCard.description;

    dispatch(updateCardSelected({ description: newCard.description }));
    dispatch(updatePrevRequests(newPrevRequests));
  } catch (e) {
    dispatch(receiveCardError(e));
  }
};

export const requestUpdateListOnDrop = (listId, cards) => async (
  dispatch,
  getState
) => {
  const state = getState();
  const { boardId, prevRequests } = state.board;
  const cardsId = cards.map(({ _id }) => _id);

  try {
    await updateCardsList(listId, cardsId);
    const newPrevRequests = { ...prevRequests };
    const lists = newPrevRequests[boardId];
    const listIdx = lists.findIndex((list) => list._id === listId);
    board.lists[listIdx].cards = cards;

    dispatch(updatePrevRequests(newPrevRequests));
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
  const { cardSelected, prevRequests, boardId } = state.board;

  try {
    isFn(options.onRequest) && options.onRequest();
    const { newCard } = await updateCard(cardSelected._id, {
      picture: { path, publicId },
    });
    isFn(options.onSuccessRequest) && options.onSuccessRequest();

    const newPrevRequests = { ...prevRequests };
    const lists = prevRequests[boardId];
    const list = lists.find((list) => list._id === cardSelected.listId);
    const card = list.cards.find((card) => card._id === cardSelected._id);
    card.picture = newCard.picture;

    dispatch(updateCardSelected({ picture: newCard.picture }));
    dispatch(updatePrevRequests(newPrevRequests));
  } catch (e) {
    dispatch(receiveCardError(e));
  }
};

export const requestUpdateCardComment = (
  commentId,
  newComment,
  options = { onRequest: noop, onSuccessRequest: noop }
) => async (dispatch, getState) => {
  const { cardSelected, prevRequests, boardId } = getState().board;

  try {
    isFn(options.onRequest) && options.onRequest();
    const { newCard } = await updateCardComment(
      cardSelected._id,
      commentId,
      newComment
    );
    isFn(options.onSuccessRequest) && options.onSuccessRequest();

    const newPrevRequests = { ...prevRequests };
    const lists = newPrevRequests[boardId];
    const list = lists.find((list) => list._id === cardSelected.listId);
    const card = list.cards.find((card) => card._id === cardSelected._id);
    card.comments = newCard.comments;

    dispatch(updateCardSelected({ comments: newCard.comments }));
    dispatch(updatePrevRequests(newPrevRequests));
  } catch (e) {
    dispatch(receiveCardError(e));
  }
};

export const requestDeleteList = (listId) => async (dispatch, getState) => {
  const { board } = getState();
  const { boardId, prevRequests } = board;

  try {
    await deleteList(listId);
    const newPrevRequests = { ...prevRequests };
    const currentLists = newPrevRequests[boardId];
    const newLists = currentLists.filter((list) => list._id !== listId);
    newPrevRequests[boardId] = newLists;

    dispatch(updatePrevRequests(newPrevRequests));
  } catch (e) {
    dispatch(receiveError(e));
  }
};

export const requestDeleteComment = (
  commentId,
  options = { onRequest: noop, onSuccessRequest: noop }
) => async (dispatch, getState) => {
  const { cardSelected, boardId, prevRequests } = getState().board;

  try {
    isFn(options.onRequest) && options.onRequest();
    const { newCard } = await deleteCardComment(cardSelected._id, commentId);
    isFn(options.onSuccessRequest) && options.onSuccessRequest();

    const newPrevRequests = { ...prevRequests };
    const lists = newPrevRequests[boardId];
    const list = lists.find((list) => list._id === cardSelected.listId);
    const card = list.cards.find((card) => card._id === cardSelected._id);
    card.comments = newCard.comments;

    dispatch(updateCardSelected({ comments: newCard.comments }));
    dispatch(updatePrevRequests(newPrevRequests));
  } catch (e) {
    dispatch(receiveCardError(e));
  }
};

export const requestDeleteLabel = (labelId) => async (dispatch, getState) => {
  const { cardSelected, prevRequests, boardId } = getState().board;

  try {
    const { newCard } = await deleteCardLabel(cardSelected._id, labelId);

    const newPrevRequests = { ...prevRequests };
    const lists = newPrevRequests[boardId];
    const list = lists.find((list) => list._id === cardSelected.listId);
    const card = list.cards.find((card) => card._id === cardSelected._id);
    card.labels = newCard.labels;

    dispatch(updateCardSelected({ labels: newCard.labels }));
    dispatch(updatePrevRequests(newPrevRequests));
  } catch (e) {
    dispatch(receiveCardError(e));
  }
};

export const requestDeleteCard = (
  options = { onRequest: noop, onSuccessRequest: noop }
) => async (dispatch, getState) => {
  const { cardSelected, prevRequests, boardId } = getState().board;

  try {
    isFn(options.onRequest) && options.onRequest();
    await deleteCard(cardSelected._id);
    isFn(options.onSuccessRequest) && options.onSuccessRequest();

    const newPrevRequests = { ...prevRequests };
    const lists = newPrevRequests[boardId];
    const list = lists.find((list) => list._id === cardSelected.listId);
    const newCards = list.cards.filter((card) => card._id !== cardSelected._id);
    list.cards = newCards;

    dispatch(updatePrevRequests(newPrevRequests));
    dispatch(closeViewCardSelected());
    dispatch(resetCardSelected());
  } catch (e) {
    dispatch(receiveError(e));
  }
};

export const getAttachmentUploaded = ({ path, publicId }, newAttachments) => (
  dispatch,
  getState
) => {
  const state = getState();
  const { prevRequests, boardId, cardSelected } = state.board;

  const newPrevRequests = { ...prevRequests };
  const lists = newPrevRequests[boardId];
  const list = lists.find((list) => list._id === cardSelected.listId);
  const card = list.cards.find((card) => card._id === cardSelected._id);

  card.attachments = newAttachments;
  card.picture = {
    path,
    publicId,
  };

  dispatch(
    updateCardSelected({
      picture: { path, publicId },
      attachments: newAttachments,
    })
  );
  dispatch(updatePrevRequests(newPrevRequests));
};

export const requestDeleteAttachment = (
  publicIdAttachment,
  options = { onRequest: noop, onSuccessRequest: noop }
) => async (dispatch, getState) => {
  const state = getState();
  const {
    board: { cardSelected, prevRequests, boardId },
  } = state;

  try {
    isFn(options.onRequest) && options.onRequest();
    const { newCard } = await deleteCardAttachment(
      cardSelected._id,
      publicIdAttachment
    );
    isFn(options.onSuccessRequest) && options.onSuccessRequest();

    const newPrevRequests = { ...prevRequests };
    const lists = newPrevRequests[boardId];
    const list = lists.find((list) => list._id === cardSelected.listId);
    const card = list.cards.find((card) => card._id === cardSelected._id);
    card.attachments = newCard.attachments;
    card.picture = newCard.picture;

    dispatch(updateCardSelected(newCard));
    dispatch(updatePrevRequests(newPrevRequests));
  } catch (e) {
    dispatch(receiveCardError(e));
  }
};

export const requestDeleteBoard = (
  options = { onRequest: noop, onSuccessRequest: noop }
) => async (dispatch, getState) => {
  const { boardId, prevRequests } = getState().board;
  const { data: boards } = getState().boards;

  try {
    isFn(options.onRequest) && options.onRequest();
    await deleteBoard(boardId);
    const newPrevRequests = { ...prevRequests };
    delete newPrevRequests[boardId];
    const newBoards = boards.filter((board) => board._id !== boardId);

    dispatch(receiveDeletedBoard(boardId, newPrevRequests));
    dispatch(updateBoards(newBoards));
    isFn(options.onSuccessRequest) && options.onSuccessRequest();
  } catch (e) {
    dispatch(receiveError(e));
  }
};
