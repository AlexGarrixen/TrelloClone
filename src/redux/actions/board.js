import { isFn } from '../../utils/typeOf';
import { getBoards } from '../../services/boards';
import * as boardsActions from './boards';
import * as requestedBoardActions from './requestedBoard';
import * as listsActions from './lists';
import * as cardsActions from './cards';
import * as boardServices from '../../services/board';
import { normalizeBoard } from '../../utils/normalizr';

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

export const RECEIVE_BOARD = 'BOARD:RECEIVE_BOARD';
export const receiveBoard = (board) => ({
  type: RECEIVE_BOARD,
  board,
});

export const RESET_BOARD = 'BOARD:RESET_BOARD';
export const resetBoard = () => ({
  type: RESET_BOARD,
});

export const RECEIVE_PREVIOUS_REQUESTED_BOARD =
  'BOARD:RECEIVE_PREVIOUS_REQUESTED_BOARD';
export const receivePreviousRequestedBoard = (board) => ({
  type: RECEIVE_PREVIOUS_REQUESTED_BOARD,
  board,
});

export const SELECT_CARD = 'BOARD:SELECT_CARD';
export const selectCard = (cardId) => ({
  type: SELECT_CARD,
  cardId,
});

export const REMOVE_SELECTED_CARD = 'BOARD:REMOVE_SELECTED_CARD';
export const removeSelectedCard = () => ({
  type: REMOVE_SELECTED_CARD,
});

export const TOGGLE_SIDEBAR_MENU = 'BOARD:TOGGLE_SIDEBAR_MENU';
export const toggleSidebarMenu = (display) => ({
  type: TOGGLE_SIDEBAR_MENU,
  display,
});

export const CLEAR_BOARD_ERROR = 'BOARD:CLEAR_BOARD_ERROR';
export const clearBoardError = () => ({
  type: CLEAR_BOARD_ERROR,
});

export const RECEIVE_UPDATED_LISTS = 'BOARD:RECEIVE_UPDATED_LISTS';
export const receiveUpdatedLists = (newLists) => ({
  type: RECEIVE_UPDATED_LISTS,
  newLists,
});

export const RECEIVE_UPDATED_TITLE = 'BOARD:RECEIVE_UPDATED_TITLE';
export const receiveUpdatedtitle = (newTitle) => ({
  type: RECEIVE_UPDATED_TITLE,
  newTitle,
});

export const RECEIVE_UPDATED_DESCRIPTION = 'BOARD:RECEIVE_UPDATED_DESCRIPTION';
export const receiveUpdatedDescription = (newDescription) => ({
  type: RECEIVE_UPDATED_DESCRIPTION,
  newDescription,
});

export const RECEIVE_UPDATED_PICTURE = 'BOARD:RECEIVE_UPDATED_PICTURE';
export const receiveUpdatedPicture = (newPicture) => ({
  type: RECEIVE_UPDATED_PICTURE,
  newPicture,
});

export const requestBoard = (boardId, onSuccessRequest) => async (dispatch) => {
  try {
    const [board] = await getBoards(boardId);

    if (board === undefined) return dispatch(receiveNotFound());

    const { entities } = normalizeBoard(board);

    dispatch(requestedBoardActions.receiveBoard(entities.board));
    dispatch(listsActions.receiveLists(entities.lists));
    dispatch(cardsActions.receiveCards(entities.cards));
    dispatch(receiveBoard(entities.board[boardId]));
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
  try {
    const { lists } = getState().board;

    isFn(options.onRequest) && options.onRequest();
    const listCreated = await boardServices.createList(boardId, data);
    isFn(options.onSuccessRequest) && options.onSuccessRequest();

    dispatch(listsActions.receiveLists({ [listCreated._id]: listCreated }));
    dispatch(
      requestedBoardActions.receiveUpdatedListsOfBoard(boardId, [
        ...lists,
        listCreated._id,
      ])
    );
    dispatch(receiveUpdatedLists([...lists, listCreated._id]));
  } catch (e) {
    dispatch(receiveError(e));
  }
};

export const requestCreateCard = (
  listId,
  data,
  options = { onRequest: noop, onSuccessRequest: noop }
) => async (dispatch, getState) => {
  try {
    isFn(options.onRequest) && options.onRequest();
    const cardCreated = await boardServices.createCard(listId, data);
    isFn(options.onSuccessRequest) && options.onSuccessRequest();

    const { cards: currentCards } = getState().lists.byId[listId];

    dispatch(cardsActions.receiveCards({ [cardCreated._id]: cardCreated }));
    dispatch(
      listsActions.receiveUpdatedCards(
        [...currentCards, cardCreated._id],
        listId
      )
    );
  } catch (e) {
    dispatch(receiveError(e));
  }
};

export const requestCreateCardComment = (
  newComment,
  options = { onRequest: noop, onSuccessRequest: noop }
) => async (dispatch, getState) => {
  const { cardSelected } = getState().board;

  try {
    isFn(options.onRequest) && options.onRequest();
    const { newCard } = await boardServices.createCardComment(
      cardSelected,
      newComment
    );
    isFn(options.onSuccessRequest) && options.onSuccessRequest();

    dispatch(cardsActions.receiveNewComment(cardSelected, newCard.comments));
  } catch (e) {
    dispatch(receiveCardError(e));
  }
};

export const requestCreateLabel = (
  newLabel,
  options = { onRequest: noop, onSuccessRequest: noop }
) => async (dispatch, getState) => {
  const { cardSelected } = getState().board;

  try {
    isFn(options.onRequest) && options.onRequest();
    const { newCard } = await boardServices.createCardLabel(
      cardSelected,
      newLabel
    );
    isFn(options.onSuccessRequest) && options.onSuccessRequest();

    dispatch(cardsActions.receiveNewLabel(cardSelected, newCard.labels));
  } catch (e) {
    dispatch(receiveCardError(e));
  }
};

export const requestUpdateBoardTitle = (newTitle) => async (
  dispatch,
  getState
) => {
  const { _id } = getState().board;

  try {
    const { title } = await boardServices.updateBoard(_id, {
      title: newTitle,
    });

    dispatch(requestedBoardActions.receiveUpdatedTitleOfBoard(_id, title));
    dispatch(receiveUpdatedtitle(title));
  } catch (e) {
    dispatch(receiveError(e));
  }
};

export const requestUpdateBoardDescription = (
  newDesc,
  options = { onRequest: noop, onSuccessRequest: noop }
) => async (dispatch, getState) => {
  const { _id } = getState().board;

  try {
    isFn(options.onRequest) && options.onRequest();
    const { description } = await boardServices.updateBoard(_id, {
      description: newDesc,
    });
    isFn(options.onSuccessRequest) && options.onSuccessRequest();

    dispatch(requestedBoardActions.receiveUpdatedDescOfBoard(_id, description));
    dispatch(receiveUpdatedDescription(description));
  } catch (e) {
    dispatch(receiveError(e));
  }
};

export const requestUpdateCardTitle = (
  newTitle,
  options = { onRequest: noop, onSuccessRequest: noop }
) => async (dispatch, getState) => {
  const { cardSelected } = getState().board;

  try {
    isFn(options.onRequest) && options.onRequest();
    const { newCard } = await boardServices.updateCard(cardSelected, {
      title: newTitle,
    });
    isFn(options.onSuccessRequest) && options.onSuccessRequest();

    dispatch(cardsActions.receiveUpdatedTitle(cardSelected, newCard.title));
  } catch (e) {
    dispatch(receiveCardError(e));
  }
};

export const requestUpdateDescription = (
  newDescription,
  options = { onRequest: noop, onSuccessRequest: noop }
) => async (dispatch, getState) => {
  const { cardSelected } = getState().board;

  try {
    isFn(options.onRequest) && options.onRequest();
    const { newCard } = await boardServices.updateCard(cardSelected, {
      description: newDescription,
    });
    isFn(options.onSuccessRequest) && options.onSuccessRequest();

    dispatch(
      cardsActions.receiveUpdatedDescription(cardSelected, newCard.description)
    );
  } catch (e) {
    dispatch(receiveCardError(e));
  }
};

export const requestUpdateListTitle = (
  listId,
  newTitle,
  options = { onRequest: noop, onSuccessRequest: noop }
) => async (dispatch) => {
  try {
    isFn(options.onRequest) && options.onRequest();
    const newList = await boardServices.updateListTitle(listId, newTitle);
    isFn(options.onSuccessRequest) && options.onSuccessRequest();

    dispatch(listsActions.receiveUpdatedTitle(newList.title, listId));
  } catch (e) {
    dispatch(receiveError(e));
  }
};

export const requestUpdateLists = (newLists) => async (dispatch, getState) => {
  const { _id } = getState().board;

  try {
    await boardServices.updateBoard(_id, { lists: newLists });
    dispatch(requestedBoardActions.receiveUpdatedListsOfBoard(_id, newLists));
    dispatch(receiveUpdatedLists(newLists));
  } catch (e) {
    dispatch(receiveError(e));
  }
};

export const requestUpdateCardsOfList = (listId, cards) => async (dispatch) => {
  try {
    await boardServices.updateCardsList(listId, cards);
    dispatch(listsActions.receiveUpdatedCards(cards, listId));
  } catch (e) {
    dispatch(receiveError(e));
  }
};

export const requestUpdateCardListId = (cardId, newListId) => async (
  dispatch
) => {
  try {
    await boardServices.updateCard(cardId, { listId: newListId });
  } catch (e) {
    dispatch(receiveCardError(e));
  }
};

export const requestUpdateCardPicture = (
  { path, publicId },
  options = { onRequest: noop, onSuccessRequest: noop }
) => async (dispatch, getState) => {
  const state = getState();
  const { cardSelected } = state.board;

  try {
    isFn(options.onRequest) && options.onRequest();
    const { newCard } = await boardServices.updateCard(cardSelected, {
      picture: { path, publicId },
    });
    isFn(options.onSuccessRequest) && options.onSuccessRequest();

    dispatch(cardsActions.receiveUpdatedPicture(cardSelected, newCard.picture));
  } catch (e) {
    dispatch(receiveCardError(e));
  }
};

export const requestUpdateCardComment = (
  commentId,
  newComment,
  options = { onRequest: noop, onSuccessRequest: noop }
) => async (dispatch, getState) => {
  const { cardSelected } = getState().board;

  try {
    isFn(options.onRequest) && options.onRequest();
    await boardServices.updateCardComment(cardSelected, commentId, newComment);
    isFn(options.onSuccessRequest) && options.onSuccessRequest();
    dispatch(
      cardsActions.receiveUpdatedComment(cardSelected, commentId, newComment)
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
  const { _id, lists } = getState().board;

  try {
    isFn(options.onRequest) && options.onRequest();
    await boardServices.deleteList(listId);
    isFn(options.onSuccessRequest) && options.onSuccessRequest();

    const newLists = lists.filter((id) => id !== listId);

    dispatch(listsActions.receiveDeletedList(listId));
    dispatch(requestedBoardActions.receiveUpdatedListsOfBoard(_id, newLists));
    dispatch(receiveUpdatedLists(newLists));
  } catch (e) {
    dispatch(receiveError(e));
  }
};

export const requestDeleteComment = (
  commentId,
  options = { onRequest: noop, onSuccessRequest: noop }
) => async (dispatch, getState) => {
  const { cardSelected } = getState().board;

  try {
    isFn(options.onRequest) && options.onRequest();
    await boardServices.deleteCardComment(cardSelected, commentId);
    isFn(options.onSuccessRequest) && options.onSuccessRequest();

    dispatch(cardsActions.receiveDeletedComment(cardSelected, commentId));
  } catch (e) {
    dispatch(receiveCardError(e));
  }
};

export const requestDeleteLabel = (labelId) => async (dispatch, getState) => {
  const { cardSelected } = getState().board;

  try {
    await boardServices.deleteCardLabel(cardSelected, labelId);

    dispatch(cardsActions.receiveDeletedLabel(cardSelected, labelId));
  } catch (e) {
    dispatch(receiveCardError(e));
  }
};

export const requestDeleteCard = (
  options = { onRequest: noop, onSuccessRequest: noop }
) => async (dispatch, getState) => {
  const { cardSelected } = getState().board;
  const { listId } = getState().cards.byId[cardSelected];

  try {
    isFn(options.onRequest) && options.onRequest();
    await boardServices.deleteCard(cardSelected);
    isFn(options.onSuccessRequest) && options.onSuccessRequest();

    dispatch(removeSelectedCard());
    dispatch(cardsActions.receiveDeletedCard(cardSelected));
    dispatch(listsActions.receiveDeletedCard(listId, cardSelected));
  } catch (e) {
    dispatch(receiveError(e));
  }
};

export const getAttachmentUploaded = ({ path, publicId }, newAttachments) => (
  dispatch,
  getState
) => {
  const { cardSelected } = getState().board;

  dispatch(
    cardsActions.receiveUploadedAttachment(
      cardSelected,
      { path, publicId },
      newAttachments
    )
  );
};

export const requestDeleteAttachment = (
  publicIdAttachment,
  attachmentId,
  options = { onRequest: noop, onSuccessRequest: noop }
) => async (dispatch, getState) => {
  const { cardSelected } = getState().board;

  try {
    isFn(options.onRequest) && options.onRequest();
    await boardServices.deleteCardAttachment(cardSelected, publicIdAttachment);
    isFn(options.onSuccessRequest) && options.onSuccessRequest();

    dispatch(cardsActions.receiveDeletedAttachment(cardSelected, attachmentId));
  } catch (e) {
    dispatch(receiveCardError(e));
  }
};

export const requestDeleteBoard = (
  options = { onRequest: noop, onSuccessRequest: noop }
) => async (dispatch, getState) => {
  const { _id, lists } = getState().board;
  const listsReducer = getState().lists;

  try {
    isFn(options.onRequest) && options.onRequest();
    await boardServices.deleteBoard(_id);

    let cards = [];
    lists.forEach((id) => (cards = [...cards, ...listsReducer.byId[id].cards]));

    dispatch(requestedBoardActions.receiveDeletedBoard(_id));
    dispatch(listsActions.receiveDeletedLists(lists));
    dispatch(cardsActions.receiveDeletedCards(cards));
    dispatch(boardsActions.receiveDeletedBoard(_id));
    isFn(options.onSuccessRequest) && options.onSuccessRequest();
  } catch (e) {
    dispatch(receiveError(e));
  }
};
