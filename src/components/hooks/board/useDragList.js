import { useEffect, useMemo, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import {
  requestUpdateLists,
  requestUpdateCardsOfList,
  requestUpdateCardListId,
} from '../../../redux/actions/board';
import { receiveUpdatedListId } from '../../../redux/actions/cards';
import { receiveUpdatedCards } from '../../../redux/actions/lists';

const useDragList = () => {
  const { boardId } = useParams();
  const dispatch = useDispatch();
  const board = useSelector(({ board }) => board);
  const requestedBoard = useSelector(({ requestedBoard }) => requestedBoard);
  const lists_ = useSelector(({ lists }) => lists);
  const cards = useSelector(({ cards }) => cards);

  const originalLists = useMemo(
    () => requestedBoard.byId[boardId].lists || [],
    [board.lists]
  );

  const [lists, set] = useState(originalLists);

  const getCard = (cardIdx, listId) => {
    const list = lists_.byId[listId];
    const cardId = list.cards[cardIdx];
    const card = cards.byId[cardId];
    return card;
  };

  const handleOnDropColumn = (dragResult) => {
    const { addedIndex, removedIndex, payload: colIdx } = dragResult;
    const newLists = [...lists];
    let listToAdd = lists[colIdx];

    if (removedIndex !== null) {
      listToAdd = newLists.splice(removedIndex, 1)[0];
    }
    if (addedIndex !== null) {
      newLists.splice(addedIndex, 0, listToAdd);
    }

    const movedColumn = !(addedIndex === 0 && removedIndex === 0);

    set(newLists);
    if (movedColumn) dispatch(requestUpdateLists(newLists));
  };

  const handleOnDrop = (listId, dragResult) => {
    const { addedIndex, removedIndex, payload } = dragResult;
    let cardToAdd = payload._id;
    const newListCards = [...lists_.byId[listId].cards];

    if (addedIndex === null && removedIndex === null) return;

    if (removedIndex !== null) {
      cardToAdd = newListCards.splice(removedIndex, 1)[0];
    }

    if (addedIndex !== null) {
      newListCards.splice(addedIndex, 0, cardToAdd);
    }

    dispatch(receiveUpdatedCards(newListCards, listId));
    dispatch(requestUpdateCardsOfList(listId, newListCards));

    if (payload.listId !== listId) {
      dispatch(receiveUpdatedListId(payload._id, listId));
      dispatch(requestUpdateCardListId(payload._id, listId));
    }
  };

  useEffect(() => {
    if (board._id) set(originalLists);
  }, [originalLists]);

  return {
    lists,
    handleOnDrop,
    handleOnDropColumn,
    getCard,
  };
};

export default useDragList;
