export const addBoard = (state, action) => {
  const { board } = action;

  return {
    ...state,
    byId: {
      ...state.byId,
      ...board,
    },
  };
};

export const updateListOfBoard = (state, action) => {
  const { boardId, newLists } = action;

  return {
    ...state,
    byId: {
      ...state.byId,
      [boardId]: {
        ...state.byId[boardId],
        lists: newLists,
      },
    },
  };
};

export const updateTitleOfBoard = (state, action) => {
  const { boardId, newTitle } = action;

  return {
    ...state,
    byId: {
      ...state.byId,
      [boardId]: {
        ...state.byId[boardId],
        title: newTitle,
      },
    },
  };
};

export const updateDescriptionOfBoard = (state, action) => {
  const { boardId, newDescription } = action;

  return {
    ...state,
    byId: {
      ...state.byId,
      [boardId]: {
        ...state.byId[boardId],
        description: newDescription,
      },
    },
  };
};

export const deleteBoard = (state, action) => {
  const { boardId } = action;
  const newsById = { ...state.byId };

  delete newsById[boardId];

  return {
    ...state,
    byId: newsById,
  };
};
