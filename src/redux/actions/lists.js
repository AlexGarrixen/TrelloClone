export const RECEIVE_LISTS = 'LISTS:RECEIVE_LISTS';
export const receiveLists = (lists) => ({
  type: RECEIVE_LISTS,
  lists,
});

export const RECEIVE_UPDATED_CARDS = 'LISTS:RECEIVE_UPDATED_CARDS';
export const receiveUpdatedCards = (newCards, listId) => ({
  type: RECEIVE_UPDATED_CARDS,
  newCards,
  listId,
});

export const RECEIVE_UPDATED_TITLE = 'LISTS:RECEIVE_UPDATED_TITLE';
export const receiveUpdatedTitle = (newTitle, listId) => ({
  type: RECEIVE_UPDATED_TITLE,
  newTitle,
  listId,
});

export const RECEIVE_DELETED_LIST = 'LISTS:RECEIVE_DELETED_LIST';
export const receiveDeletedList = (listId) => ({
  type: RECEIVE_DELETED_LIST,
  deletedListId: listId,
});

export const RECEIVE_DELETED_CARD = 'LISTS:RECEIVE_DELETED_CARD';
export const receiveDeletedCard = (listId, cardId) => ({
  type: RECEIVE_DELETED_CARD,
  listId,
  deletedCardId: cardId,
});

export const RECEIVE_DELETED_LISTS = 'LISTS:RECEIVE_DELETED_LISTS';
export const receiveDeletedLists = (listsIds) => ({
  type: RECEIVE_DELETED_LISTS,
  listsIds,
});
