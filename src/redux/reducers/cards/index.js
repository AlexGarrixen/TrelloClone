import * as actions from '../../actions/cards';
import * as handlers from './handlers';

const initialState = {
  byId: {},
};

const cardsReducer = (state = initialState, action) => {
  switch (action.type) {
    case actions.RECEIVE_CARDS:
      return handlers.addCards(state, action);
    case actions.RECEIVE_UPDATED_LISTID:
      return handlers.updateListIdOfCard(state, action);
    case actions.RECEIVE_UPDATED_TITLE:
      return handlers.updateTitleOfCard(state, action);
    case actions.RECEIVE_UPDATED_DESCRIPTION:
      return handlers.updateDescriptionOfCard(state, action);
    case actions.RECEIVE_UPDATED_PICTURE:
      return handlers.updatePictureOfCard(state, action);
    case actions.RECEIVE_DELETED_ATTACHMENT:
      return handlers.deleteAttachmentOfCard(state, action);
    case actions.RECEIVE_NEW_COMMENT:
      return handlers.addCommentOfCard(state, action);
    case actions.RECEIVE_UPDATED_COMMENT:
      return handlers.updateCommentOfCard(state, action);
    case actions.RECEIVE_DELETED_COMMENT:
      return handlers.deleteCommentOfCard(state, action);
    case actions.RECEIVE_UPLOADED_ATTACHMENT:
      return handlers.addUploadedAttachment(state, action);
    case actions.RECEIVE_NEW_LABEL:
      return handlers.addLabelToCard(state, action);
    case actions.RECEIVE_DELETED_LABEL:
      return handlers.deleteLabelOfCard(state, action);
    case actions.RECEIVE_DELETED_CARD:
      return handlers.deleteCard(state, action);
    case actions.RECEIVE_DELETED_CARDS:
      return handlers.deleteCards(state, action);
    default:
      return state;
  }
};

export default cardsReducer;
