export const addLists = (state, action) => {
  const { lists } = action;

  return {
    ...state,
    byId: {
      ...state.byId,
      ...lists,
    },
  };
};

export const updateCards = (state, action) => {
  const { newCards, listId } = action;

  return {
    ...state,
    byId: {
      ...state.byId,
      [listId]: {
        ...state.byId[listId],
        cards: newCards,
      },
    },
  };
};

export const updateTitleOfList = (state, action) => {
  const { newTitle, listId } = action;

  return {
    ...state,
    byId: {
      ...state.byId,
      [listId]: {
        ...state.byId[listId],
        title: newTitle,
      },
    },
  };
};

export const deleteLists = (state, action) => {
  const { listsIds } = action;
  const newsById = { ...state.byId };

  listsIds.forEach((id) => delete newsById[id]);

  return {
    ...state,
    byId: newsById,
  };
};

export const deleteList = (state, action) => {
  const { deletedListId } = action;
  const newsById = { ...state.byId };

  delete newsById[deletedListId];

  return {
    ...state,
    byId: newsById,
  };
};

export const deleteCardOfList = (state, action) => {
  const { deletedCardId, listId } = action;
  const newCards = state.byId[listId].cards.filter(
    (id) => id !== deletedCardId
  );

  return {
    ...state,
    byId: {
      ...state.byId,
      [listId]: {
        ...state.byId[listId],
        cards: newCards,
      },
    },
  };
};
