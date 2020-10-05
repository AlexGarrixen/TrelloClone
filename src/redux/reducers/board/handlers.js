export const setBoard = (state, action) => {
  const { boardId, title, description } = action;

  return {
    ...state,
    boardId,
    title,
    description,
  };
};

export const updateBoard = (state, action) => {
  const { payload } = action;

  return {
    ...state,
    ...payload,
  };
};

export const setSelectedCard = (state, action) => {
  const { cardData } = action;

  return {
    ...state,
    cardModalEditOpen: true,
    cardSelected: cardData,
  };
};

export const updateCardSelected = (state, action) => {
  const { payload } = action;

  return {
    ...state,
    cardSelected: { ...state.cardSelected, ...payload },
  };
};

export const resetSelectedCard = (state) => ({
  ...state,
  cardSelected: {},
});

export const closeSelectedCard = (state) => ({
  ...state,
  cardModalEditOpen: false,
  cardSelected: {},
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
