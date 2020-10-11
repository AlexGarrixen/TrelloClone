export const addCards = (state, action) => {
  const { cards } = action;

  return {
    ...state,
    byId: {
      ...state.byId,
      ...cards,
    },
  };
};

export const updateListIdOfCard = (state, action) => {
  const { cardId, newListId } = action;

  return {
    ...state,
    byId: {
      ...state.byId,
      [cardId]: {
        ...state.byId[cardId],
        listId: newListId,
      },
    },
  };
};

export const updateTitleOfCard = (state, action) => {
  const { cardId, newTitle } = action;

  return {
    ...state,
    byId: {
      ...state.byId,
      [cardId]: {
        ...state.byId[cardId],
        title: newTitle,
      },
    },
  };
};

export const updateDescriptionOfCard = (state, action) => {
  const { cardId, newDescription } = action;

  return {
    ...state,
    byId: {
      ...state.byId,
      [cardId]: {
        ...state.byId[cardId],
        description: newDescription,
      },
    },
  };
};

export const updatePictureOfCard = (state, action) => {
  const { cardId, newPicture } = action;

  return {
    ...state,
    byId: {
      ...state.byId,
      [cardId]: {
        ...state.byId[cardId],
        picture: newPicture,
      },
    },
  };
};

export const deleteAttachmentOfCard = (state, action) => {
  const { cardId, deletedAttachmentId } = action;
  const newAttachments = state.byId[cardId].attachments.filter(
    ({ _id }) => _id !== deletedAttachmentId
  );

  return {
    ...state,
    byId: {
      ...state.byId,
      [cardId]: {
        ...state.byId[cardId],
        attachments: newAttachments,
      },
    },
  };
};

export const addCommentOfCard = (state, action) => {
  const { cardId, newComments } = action;

  return {
    ...state,
    byId: {
      ...state.byId,
      [cardId]: {
        ...state.byId[cardId],
        comments: newComments,
      },
    },
  };
};

export const updateCommentOfCard = (state, action) => {
  const { cardId, newComment, commentId } = action;
  const newComments = state.byId[cardId].comments.map((comment) => {
    if (comment._id === commentId) comment.description = newComment;
    return comment;
  });

  return {
    ...state,
    byId: {
      ...state.byId,
      [cardId]: {
        ...state.byId[cardId],
        comments: newComments,
      },
    },
  };
};

export const deleteCommentOfCard = (state, action) => {
  const { cardId, deletedCommentId } = action;
  const newComments = state.byId[cardId].comments.filter(
    ({ _id }) => _id !== deletedCommentId
  );

  return {
    ...state,
    byId: {
      ...state.byId,
      [cardId]: {
        ...state.byId[cardId],
        comments: newComments,
      },
    },
  };
};

export const addUploadedAttachment = (state, action) => {
  const { cardId, attachment, newAttachments } = action;

  return {
    ...state,
    byId: {
      ...state.byId,
      [cardId]: {
        ...state.byId[cardId],
        picture: attachment,
        attachments: newAttachments,
      },
    },
  };
};

export const addLabelToCard = (state, action) => {
  const { cardId, newLabels } = action;

  return {
    ...state,
    byId: {
      ...state.byId,
      [cardId]: {
        ...state.byId[cardId],
        labels: newLabels,
      },
    },
  };
};

export const deleteLabelOfCard = (state, action) => {
  const { cardId, deletedLabelId } = action;
  const newLabels = state.byId[cardId].labels.filter(
    ({ _id }) => _id !== deletedLabelId
  );

  return {
    ...state,
    byId: {
      ...state.byId,
      [cardId]: {
        ...state.byId[cardId],
        labels: newLabels,
      },
    },
  };
};

export const deleteCard = (state, action) => {
  const { deletedCardId } = action;
  const newsById = { ...state.byId };

  delete newsById[deletedCardId];

  return {
    ...state,
    byId: newsById,
  };
};

export const deleteCards = (state, action) => {
  const { cardsIds } = action;
  const newsById = { ...state.byId };

  cardsIds.forEach((id) => delete newsById[id]);

  return {
    ...state,
    byId: newsById,
  };
};
