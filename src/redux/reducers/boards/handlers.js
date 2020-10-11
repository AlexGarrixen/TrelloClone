export const setBoards = (state, action) => {
  const { boards } = action;

  return {
    ...state,
    isFetching: false,
    fetched: true,
    data: boards,
  };
};

export const setVisibilityRegistrationForm = (state, action) => {
  const { value } = action;

  return {
    ...state,
    showRegistrationForm: value,
  };
};

export const addCreatedBoard = (state, action) => {
  const { board } = action;

  return {
    ...state,
    data: [...state.data, board],
  };
};

export const deleteBoard = (state, action) => {
  const { deletedBoardId } = action;
  const newBoards = state.data.filter(({ _id }) => _id !== deletedBoardId);

  return {
    ...state,
    data: newBoards,
  };
};

export const setError = (state, action) => {
  const { error } = action;

  return {
    ...state,
    isFetching: false,
    error,
  };
};

export const updatePictureOfBoard = (state, action) => {
  const { boardId, newPicture } = action;
  const newData = state.data.map((board) => {
    if (board._id === boardId) board.picture = newPicture;
    return board;
  });

  return {
    ...state,
    data: newData,
  };
};
