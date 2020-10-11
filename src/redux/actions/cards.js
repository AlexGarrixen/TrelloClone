export const RECEIVE_CARDS = 'CARDS:RECEIVE_CARDS';
export const receiveCards = (cards) => ({
  type: RECEIVE_CARDS,
  cards,
});

export const RECEIVE_UPDATED_LISTID = 'CARDS:RECEIVE_UPDATED_LISTID';
export const receiveUpdatedListId = (cardId, newListId) => ({
  type: RECEIVE_UPDATED_LISTID,
  newListId,
  cardId,
});

export const RECEIVE_UPDATED_TITLE = 'CARDS:RECEIVE_UPDATED_TITLE';
export const receiveUpdatedTitle = (cardId, newTitle) => ({
  type: RECEIVE_UPDATED_TITLE,
  newTitle,
  cardId,
});

export const RECEIVE_UPDATED_DESCRIPTION = 'CARDS:RECEIVE_UPDATED_DESCRIPTION';
export const receiveUpdatedDescription = (cardId, newDescription) => ({
  type: RECEIVE_UPDATED_DESCRIPTION,
  newDescription,
  cardId,
});

export const RECEIVE_UPDATED_PICTURE = 'CARDS:RECEIVE_UPDATED_PICTURE';
export const receiveUpdatedPicture = (cardId, newPicture) => ({
  type: RECEIVE_UPDATED_PICTURE,
  newPicture,
  cardId,
});

export const RECEIVE_DELETED_ATTACHMENT = 'CARDS:RECEIVE_DELETED_ATTACHMENT';
export const receiveDeletedAttachment = (cardId, attachmentId) => ({
  type: RECEIVE_DELETED_ATTACHMENT,
  deletedAttachmentId: attachmentId,
  cardId,
});

export const RECEIVE_NEW_COMMENT = 'CARDS:RECEIVE_NEW_COMMENT';
export const receiveNewComment = (cardId, newComments) => ({
  type: RECEIVE_NEW_COMMENT,
  cardId,
  newComments,
});

export const RECEIVE_UPDATED_COMMENT = 'CARDS:RECEIVE_UPDATED_COMMENT';
export const receiveUpdatedComment = (cardId, commentId, newComment) => ({
  type: RECEIVE_UPDATED_COMMENT,
  cardId,
  commentId,
  newComment,
});

export const RECEIVE_DELETED_COMMENT = 'CARDS:RECEIVE_DELETED_COMMENT';
export const receiveDeletedComment = (cardId, commentId) => ({
  type: RECEIVE_DELETED_COMMENT,
  cardId,
  deletedCommentId: commentId,
});

export const RECEIVE_UPLOADED_ATTACHMENT = 'CARDS:RECEIVE_UPLOADED_ATTACHMENT';
export const receiveUploadedAttachment = (
  cardId,
  attachment,
  newAttachments
) => ({
  type: RECEIVE_UPLOADED_ATTACHMENT,
  cardId,
  attachment,
  newAttachments,
});

export const RECEIVE_NEW_LABEL = 'CARDS:RECEIVE_NEW_LABEL';
export const receiveNewLabel = (cardId, newLabels) => ({
  type: RECEIVE_NEW_LABEL,
  cardId,
  newLabels,
});

export const RECEIVE_DELETED_LABEL = 'CARDS:RECEIVE_DELETED_LABEL';
export const receiveDeletedLabel = (cardId, labelId) => ({
  type: RECEIVE_DELETED_LABEL,
  cardId,
  deletedLabelId: labelId,
});

export const RECEIVE_DELETED_CARD = 'CARDS:RECEIVE_DELETED_CARD';
export const receiveDeletedCard = (cardId) => ({
  type: RECEIVE_DELETED_CARD,
  deletedCardId: cardId,
});

export const RECEIVE_DELETED_CARDS = 'CARDS:RECEIVE_DELETED_CARDS';
export const receiveDeletedCards = (cardsIds) => ({
  type: RECEIVE_DELETED_CARDS,
  cardsIds,
});
