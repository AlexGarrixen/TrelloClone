export const setBoard = (state, action) => {
  const { board } = action;

  return {
    ...state,
    _id: board._id,
    title: board.title,
    description: board.description,
    picture: board.picture,
    lists: board.lists,
  };
};

export const setSelectedCard = (state, action) => {
  const { cardId } = action;

  return {
    ...state,
    cardModalEditOpen: true,
    cardSelected: cardId,
  };
};

export const removeSelectedCard = (state) => ({
  ...state,
  cardSelected: '',
});

export const toggleSidebarMenu = (state, action) => {
  const { display } = action;

  return {
    ...state,
    sidebarMenuOpen: display,
  };
};

export const clearBoardError = (state) => ({
  ...state,
  error: null,
});

export const setNotFound = (state) => ({
  ...state,
  notFound: true,
});

export const setError = (state, action) => {
  const { error } = action;

  return {
    ...state,
    error,
  };
};

export const setCardError = (state, action) => {
  const { error } = action;

  return {
    ...state,
    cardErrors: [...state.cardErrors, error],
  };
};

export const updateLists = (state, action) => {
  const { newLists } = action;

  return {
    ...state,
    lists: newLists,
  };
};

export const updateTitle = (state, action) => {
  const { newTitle } = action;

  return {
    ...state,
    title: newTitle,
  };
};

export const updateDescription = (state, action) => {
  const { newDescription } = action;

  return {
    ...state,
    description: newDescription,
  };
};

export const updatePicture = (state, action) => {
  const { newPicture } = action;

  return {
    ...state,
    picture: newPicture,
  };
};
