import * as actions from '../../actions/lists';
import * as handlers from './handlers';

const initialState = {
  byId: {},
};

const listsReducer = (state = initialState, action) => {
  switch (action.type) {
    case actions.RECEIVE_LISTS:
      return handlers.addLists(state, action);
    case actions.RECEIVE_UPDATED_CARDS:
      return handlers.updateCards(state, action);
    case actions.RECEIVE_DELETED_LIST:
      return handlers.deleteList(state, action);
    case actions.RECEIVE_UPDATED_TITLE:
      return handlers.updateTitleOfList(state, action);
    case actions.RECEIVE_DELETED_CARD:
      return handlers.deleteCardOfList(state, action);
    case actions.RECEIVE_DELETED_LISTS:
      return handlers.deleteLists(state, action);
    default:
      return state;
  }
};

export default listsReducer;
