export const RECEIVE_BOARD = 'RECEIVE_NEW_BOARD';
export const receiveBoard = (board) => ({
  type: RECEIVE_BOARD,
  board,
});

export const RECEIVE_NEW_BOARD_TITLE = 'RECEIVE_NEW_BOARD_TITLE';
export const receiveNewBoardTitle = (boardId, newTitle) => ({
  type: RECEIVE_NEW_BOARD_TITLE,
  boardId,
  newTitle,
});

export const RECEIVE_NEW_BOARD_DESC = 'RECEIVE_NEW_BOARD_DESC';
export const receiveNewBoardDescription = (boardId, newDescription) => ({
  type: RECEIVE_NEW_BOARD_DESC,
  boardId,
  newDescription,
});

export const RECEIVE_NEW_BOARD_LIST = 'RECEIVE_NEW_BOARD_LIST';
export const receiveNewBoardList = (boardId, newList) => ({
  type: RECEIVE_NEW_BOARD_LIST,
  boardId,
  newList,
});

export const RECEIVE_BOARD_LIST_TITLE_UPDATED =
  'RECEIVE_BOARD_LIST_TITLE_UPDATED';
export const receiveBoardListTitleUpdated = ({
  boardId,
  listId,
  newTitle,
}) => ({
  type: RECEIVE_BOARD_LIST_TITLE_UPDATED,
  boardId,
  listId,
  newTitle,
});

export const RECEIVE_BOARD_LISTS_UPDATED = 'RECEIVE_BOARD_LISTS_UPDATED';
export const receiveBoardListsUpdated = (boardId, newLists) => ({
  type: RECEIVE_BOARD_LISTS_UPDATED,
  boardId,
  newLists,
});

export const RECEIVE_BOARD_LIST_DELETED = 'RECEIVE_BOARD_LIST_DELETED';
export const receiveBoardListDeleted = (boardId, listId) => ({
  type: RECEIVE_BOARD_LIST_DELETED,
  boardId,
  listIdDeleted: listId,
});

export const RECEIVE_BOARD_LIST_CARDS_UPDATED =
  'RECEIVE_BOARD_LIST_CARDS_UPDATED';
export const receiveBoardListCardsUpdated = ({
  boardId,
  listId,
  newCards,
}) => ({
  type: RECEIVE_BOARD_LIST_CARDS_UPDATED,
  boardId,
  listId,
  newCards,
});

export const RECEIVE_NEW_BOARD_CARD = 'RECEIVE_NEW_BOARD_CARD';
export const receiveNewBoardCard = (boardId, listId, newCard) => ({
  type: RECEIVE_NEW_BOARD_CARD,
  boardId,
  listId,
  newCard,
});

export const RECEIVE_BOARD_CARD_PICTURE = 'RECEIVE_BOARD_CARD_PICTURE';
export const receiveBoardCardPicture = ({
  boardId,
  listId,
  cardId,
  picture,
  newAttachments,
}) => ({
  type: RECEIVE_BOARD_CARD_PICTURE,
  boardId,
  listId,
  cardId,
  picture,
  newAttachments,
});

export const RECEIVE_NEW_BOARD_CARD_TITLE = 'RECEIVE_NEW_BOARD_CARD_TITLE';
export const receiveNewBoardCardTitle = ({
  boardId,
  listId,
  cardId,
  newTitle,
}) => ({
  type: RECEIVE_NEW_BOARD_CARD_TITLE,
  boardId,
  listId,
  cardId,
  newTitle,
});

export const RECEIVE_NEW_BOARD_CARD_DESC = 'RECEIVE_NEW_BOARD_CARD_DESC';
export const receiveNewBoardCardDesc = ({
  boardId,
  listId,
  cardId,
  newDescription,
}) => ({
  type: RECEIVE_NEW_BOARD_CARD_DESC,
  boardId,
  listId,
  cardId,
  newDescription,
});

export const RECEIVE_NEW_BOARD_CARD_COMMENT = 'RECEIVE_NEW_BOARD_CARD_COMMENT';
export const receiveNewBoardCardComment = ({
  boardId,
  listId,
  cardId,
  newComments,
}) => ({
  type: RECEIVE_NEW_BOARD_CARD_COMMENT,
  boardId,
  listId,
  cardId,
  newComments,
});

export const RECEIVE_BOARD_CARD_COMMENT_UPDATED =
  'RECEIVE_BOARD_CARD_COMMENT_UPDATED';
export const receiveBoardCardCommentUpdated = ({
  boardId,
  listId,
  cardId,
  newComments,
}) => ({
  type: RECEIVE_BOARD_CARD_COMMENT_UPDATED,
  boardId,
  listId,
  cardId,
  newComments,
});

export const RECEIVE_BOARD_CARD_COMMENT_DELETED =
  'RECEIVE_BOARD_CARD_COMMENT_DELETED';
export const receiveBoardCardCommentDeleted = ({
  boardId,
  listId,
  cardId,
  commentId,
}) => ({
  type: RECEIVE_BOARD_CARD_COMMENT_DELETED,
  boardId,
  listId,
  cardId,
  commentIdDeleted: commentId,
});

export const RECEIVE_NEW_BOARD_CARD_LABEL = 'RECEIVE_NEW_BOARD_CARD_LABEL';
export const receiveNewBoardCardLabel = ({
  boardId,
  listId,
  cardId,
  newLabels,
}) => ({
  type: RECEIVE_NEW_BOARD_CARD_LABEL,
  boardId,
  listId,
  cardId,
  newLabels,
});

export const RECEIVE_BOARD_CARD_LABEL_DELETED =
  'RECEIVE_BOARD_CARD_LABEL_DELETED';
export const receiveBoardCardLabelDeleted = ({
  boardId,
  listId,
  cardId,
  newLabels,
}) => ({
  type: RECEIVE_BOARD_CARD_LABEL_DELETED,
  boardId,
  listId,
  cardId,
  newLabels,
});

export const RECEIVE_BOARD_CARD_PICTURE_DELETED =
  'RECEIVE_BOARD_CARD_PICTURE_DELETED';
export const receiveBoardCardPictureDelted = ({
  boardId,
  listId,
  cardId,
  newCard,
}) => ({
  type: RECEIVE_BOARD_CARD_PICTURE_DELETED,
  boardId,
  listId,
  cardId,
  newCard,
});

export const RECEIVE_BOARD_CARD_PICTURE_UPDATED =
  'RECEIVE_BOARD_CARD_PICTURE_UPDATED';
export const receiveBoardCardPictureUpdated = ({
  boardId,
  listId,
  cardId,
  newPicture,
}) => ({
  type: RECEIVE_BOARD_CARD_PICTURE_UPDATED,
  boardId,
  listId,
  cardId,
  newPicture,
});

export const RECEIVE_BOARD_CARD_DELETED = 'RECEIVE_BOARD_CARD_DELETED';
export const receiveBoardCardDeleted = ({ boardId, listId, cardId }) => ({
  type: RECEIVE_BOARD_CARD_DELETED,
  boardId,
  listId,
  cardIdDeleted: cardId,
});

export const RECEIVE_BOARD_DELETED = 'RECEIVE_BOARD_DELETED';
export const receiveBoardDeleted = (boardId) => ({
  type: RECEIVE_BOARD_DELETED,
  boardIdDeleted: boardId,
});
