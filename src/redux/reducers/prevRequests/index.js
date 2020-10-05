import * as handlers from './handlers';
import {
  RECEIVE_BOARD,
  RECEIVE_BOARD_CARD_PICTURE,
  RECEIVE_NEW_BOARD_TITLE,
  RECEIVE_NEW_BOARD_DESC,
  RECEIVE_NEW_BOARD_LIST,
  RECEIVE_BOARD_LISTS_UPDATED,
  RECEIVE_BOARD_LIST_CARDS_UPDATED,
  RECEIVE_BOARD_LIST_DELETED,
  RECEIVE_NEW_BOARD_CARD,
  RECEIVE_NEW_BOARD_CARD_COMMENT,
  RECEIVE_NEW_BOARD_CARD_TITLE,
  RECEIVE_NEW_BOARD_CARD_DESC,
  RECEIVE_BOARD_CARD_COMMENT_UPDATED,
  RECEIVE_BOARD_CARD_COMMENT_DELETED,
  RECEIVE_NEW_BOARD_CARD_LABEL,
  RECEIVE_BOARD_CARD_LABEL_DELETED,
  RECEIVE_BOARD_CARD_PICTURE_DELETED,
  RECEIVE_BOARD_CARD_PICTURE_UPDATED,
  RECEIVE_BOARD_CARD_DELETED,
  RECEIVE_BOARD_DELETED,
} from '../../actions/prevRequests';

const initialState = {
  boards: {},
};

const prevRequestsReducer = (state = initialState, action) => {
  switch (action.type) {
    case RECEIVE_BOARD:
      return handlers.addBoardToPrevRequests(state, action);
    case RECEIVE_NEW_BOARD_TITLE:
      return handlers.updateBoardTitle(state, action);
    case RECEIVE_NEW_BOARD_DESC:
      return handlers.updateBoardDescription(state, action);
    case RECEIVE_NEW_BOARD_LIST:
      return handlers.addNewListToBoard(state, action);
    case RECEIVE_BOARD_LISTS_UPDATED:
      return handlers.updateBoardLists(state, action);
    case RECEIVE_BOARD_LIST_CARDS_UPDATED:
      return handlers.updateBoardListCards(state, action);
    case RECEIVE_BOARD_LIST_DELETED:
      return handlers.deleteBoardList(state, action);
    case RECEIVE_NEW_BOARD_CARD:
      return handlers.addNewCardToBoard(state, action);
    case RECEIVE_NEW_BOARD_CARD_COMMENT:
      return handlers.addNewCommentToBoardCard(state, action);
    case RECEIVE_NEW_BOARD_CARD_TITLE:
      return handlers.updateBoardCardTitle(state, action);
    case RECEIVE_NEW_BOARD_CARD_DESC:
      return handlers.updateBoardCardDescription(state, action);
    case RECEIVE_BOARD_CARD_COMMENT_UPDATED:
      return handlers.updateBoardCardComment(state, action);
    case RECEIVE_BOARD_CARD_COMMENT_DELETED:
      return handlers.deleteBoardCardComment(state, action);
    case RECEIVE_NEW_BOARD_CARD_LABEL:
      return handlers.addNewLabelToBoardCard(state, action);
    case RECEIVE_BOARD_CARD_LABEL_DELETED:
      return handlers.deleteBoardCardLabel(state, action);
    case RECEIVE_BOARD_CARD_PICTURE:
      return handlers.addBoardCardPicture(state, action);
    case RECEIVE_BOARD_CARD_PICTURE_DELETED:
      return handlers.deleteBoardCardAttachment(state, action);
    case RECEIVE_BOARD_CARD_PICTURE_UPDATED:
      return handlers.updateBoardCardPicture(state, action);
    case RECEIVE_BOARD_CARD_DELETED:
      return handlers.deleteBoardCard(state, action);
    case RECEIVE_BOARD_DELETED:
      return handlers.deleteBoard(state, action);
    default:
      return state;
  }
};

export default prevRequestsReducer;
