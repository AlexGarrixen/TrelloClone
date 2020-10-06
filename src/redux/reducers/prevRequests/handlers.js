export const addBoardToPrevRequests = (state, action) => {
  const { board } = action;

  return {
    ...state,
    boards: { ...state.boards, [board._id]: { ...board } },
  };
};

export const updateBoardTitle = (state, action) => {
  const { boardId, newTitle } = action;

  return {
    ...state,
    boards: {
      ...state.boards,
      [boardId]: {
        ...state.boards[boardId],
        title: newTitle,
      },
    },
  };
};

export const updateBoardDescription = (state, action) => {
  const { boardId, newDescription } = action;

  return {
    ...state,
    boards: {
      ...state.boards,
      [boardId]: {
        ...state.boards[boardId],
        description: newDescription,
      },
    },
  };
};

export const addNewListToBoard = (state, action) => {
  const { boardId, newList } = action;
  const currentLists = state.boards[boardId].lists;

  return {
    ...state,
    boards: {
      ...state.boards,
      [boardId]: {
        ...state.boards[boardId],
        lists: [...currentLists, newList],
      },
    },
  };
};

export const updateBoardLists = (state, action) => {
  const { boardId, newLists } = action;

  return {
    ...state,
    boards: {
      ...state.boards,
      [boardId]: {
        ...state.boards[boardId],
        lists: newLists,
      },
    },
  };
};

export const updateBoardListTitle = (state, action) => {
  const { boardId, listId, newTitle } = action;
  const newLists = [...state.boards[boardId].lists];
  const ownerList = newLists.find((list) => list._id === listId);
  ownerList.title = newTitle;

  return {
    ...state,
    boards: {
      ...state.boards,
      [boardId]: {
        ...state.boards[boardId],
        lists: newLists,
      },
    },
  };
};

export const updateBoardListCards = (state, action) => {
  const { boardId, listId, newCards } = action;
  const newLists = [...state.boards[boardId].lists];
  const ownerList = newLists.find((list) => list._id === listId);
  ownerList.cards = newCards;

  return {
    ...state,
    boards: {
      ...state.boards,
      [boardId]: {
        ...state.boards[boardId],
        lists: newLists,
      },
    },
  };
};

export const deleteBoardList = (state, action) => {
  const { boardId, listIdDeleted } = action;
  const newLists = state.boards[boardId].lists.filter(
    ({ _id }) => _id !== listIdDeleted
  );

  return {
    ...state,
    boards: {
      ...state.boards,
      [boardId]: {
        ...state.boards[boardId],
        lists: newLists,
      },
    },
  };
};

export const addNewCardToBoard = (state, action) => {
  const { boardId, listId, newCard } = action;
  const newLists = [...state.boards[boardId].lists];
  const ownerList = newLists.find((list) => list._id === listId);
  ownerList.cards = [...ownerList.cards, newCard];

  return {
    ...state,
    boards: {
      ...state.boards,
      [boardId]: {
        ...state.boards[boardId],
        lists: newLists,
      },
    },
  };
};

export const addNewCommentToBoardCard = (state, action) => {
  const { boardId, listId, cardId, newComments } = action;
  const newLists = [...state.boards[boardId].lists];
  const ownerList = newLists.find((list) => list._id === listId);
  const card = ownerList.cards.find((card) => card._id === cardId);
  card.comments = newComments;

  return {
    ...state,
    boards: {
      ...state.boards,
      [boardId]: {
        ...state.boards[boardId],
        lists: newLists,
      },
    },
  };
};

export const updateBoardCardTitle = (state, action) => {
  const { boardId, listId, cardId, newTitle } = action;
  const newLists = [...state.boards[boardId].lists];
  const ownerList = newLists.find((list) => list._id === listId);
  const card = ownerList.cards.find((card) => card._id === cardId);
  card.title = newTitle;

  return {
    ...state,
    boards: {
      ...state.boards,
      [boardId]: {
        ...state.boards[boardId],
        lists: newLists,
      },
    },
  };
};

export const updateBoardCardDescription = (state, action) => {
  const { boardId, listId, cardId, newDescription } = action;
  const newLists = [...state.boards[boardId].lists];
  const ownerList = newLists.find((list) => list._id === listId);
  const card = ownerList.cards.find((card) => card._id === cardId);
  card.description = newDescription;

  return {
    ...state,
    boards: {
      ...state.boards,
      [boardId]: {
        ...state.boards[boardId],
        lists: newLists,
      },
    },
  };
};

export const updateBoardCardComment = (state, action) => {
  const { boardId, listId, cardId, newComments } = action;
  const newLists = [...state.boards[boardId].lists];
  const ownerList = newLists.find((list) => list._id === listId);
  const card = ownerList.cards.find((card) => card._id === cardId);
  card.comments = newComments;

  return {
    ...state,
    boards: {
      ...state.boards,
      [boardId]: {
        ...state.boards[boardId],
        lists: newLists,
      },
    },
  };
};

export const deleteBoardCardComment = (state, action) => {
  const { boardId, listId, cardId, commentIdDeleted } = action;
  const newLists = [...state.boards[boardId].lists];
  const ownerList = newLists.find((list) => list._id === listId);
  const card = ownerList.cards.find((card) => card._id === cardId);
  card.comments = card.comments.filter(
    (comment) => comment._id !== commentIdDeleted
  );

  return {
    ...state,
    boards: {
      ...state.boards,
      [boardId]: {
        ...state.boards[boardId],
        lists: newLists,
      },
    },
  };
};

export const addNewLabelToBoardCard = (state, action) => {
  const { boardId, listId, cardId, newLabels } = action;
  const newLists = [...state.boards[boardId].lists];
  const ownerList = newLists.find((list) => list._id === listId);
  const card = ownerList.cards.find((card) => card._id === cardId);
  card.labels = newLabels;

  return {
    ...state,
    boards: {
      ...state.boards,
      [boardId]: {
        ...state.boards[boardId],
        lists: newLists,
      },
    },
  };
};

export const deleteBoardCardLabel = (state, action) => {
  const { boardId, listId, cardId, newLabels } = action;
  const newLists = [...state.boards[boardId].lists];
  const ownerList = newLists.find((list) => list._id === listId);
  const card = ownerList.cards.find((card) => card._id === cardId);
  card.labels = newLabels;

  return {
    ...state,
    boards: {
      ...state.boards,
      [boardId]: {
        ...state.boards[boardId],
        lists: newLists,
      },
    },
  };
};

export const addBoardCardPicture = (state, action) => {
  const { boardId, listId, cardId, picture, newAttachments } = action;

  const newLists = [...state.boards[boardId].lists];
  const ownerList = newLists.find((list) => list._id === listId);
  const card = ownerList.cards.find((card) => card._id === cardId);
  card.picture = picture;
  card.attachments = newAttachments;

  return {
    ...state,
    boards: {
      ...state.boards,
      [boardId]: {
        ...state.boards[boardId],
        lists: newLists,
      },
    },
  };
};

export const deleteBoardCardAttachment = (state, action) => {
  const { boardId, listId, cardId, newCard } = action;
  const newLists = [...state.boards[boardId].lists];
  const ownerList = newLists.find((list) => list._id === listId);
  const card = ownerList.cards.find((card) => card._id === cardId);
  card.picture = newCard.picture;
  card.attachments = newCard.attachments;

  return {
    ...state,
    boards: {
      ...state.boards,
      [boardId]: {
        ...state.boards[boardId],
        lists: newLists,
      },
    },
  };
};

export const updateBoardCardPicture = (state, action) => {
  const { boardId, listId, cardId, newPicture } = action;
  const newLists = [...state.boards[boardId].lists];
  const ownerList = newLists.find((list) => list._id === listId);
  const card = ownerList.cards.find((card) => card._id === cardId);
  card.picture = newPicture;

  return {
    ...state,
    boards: {
      ...state.boards,
      [boardId]: {
        ...state.boards[boardId],
        lists: newLists,
      },
    },
  };
};

export const deleteBoardCard = (state, action) => {
  const { boardId, listId, cardIdDeleted } = action;
  const newLists = [...state.boards[boardId].lists];
  const ownerList = newLists.find((list) => list._id === listId);
  const newCards = ownerList.cards.filter((card) => card._id !== cardIdDeleted);
  ownerList.cards = newCards;

  return {
    ...state,
    boards: {
      ...state.boards,
      [boardId]: {
        ...state.boards[boardId],
        lists: newLists,
      },
    },
  };
};

export const deleteBoard = (state, action) => {
  const { boardIdDeleted } = action;
  const newBoards = { ...state.boards };
  delete newBoards[boardIdDeleted];

  return {
    ...state,
    boards: newBoards,
  };
};
