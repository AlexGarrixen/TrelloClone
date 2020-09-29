import { useEffect, useMemo, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import {
  requestUpdateListOnDrop,
  requestUpdateCardOnDrop,
} from '../../redux/actions/board';

const useDragList = () => {
  const { boardId } = useParams();
  const dispatch = useDispatch();
  const { prevRequests } = useSelector(({ board }) => board);

  const boardLists = useMemo(() => prevRequests[boardId]?.lists || [], [
    boardId,
    prevRequests[boardId]?.lists,
  ]);

  const [lists, set] = useState(boardLists);

  const getCard = (cardIdx, listId) => {
    const list = lists.find((list) => list._id === listId);
    const card = list.cards[cardIdx];
    return card;
  };

  const handleOnDrop = (listId, dragResult) => {
    const { addedIndex, removedIndex, payload } = dragResult;
    const newLists = [...lists];
    const listSelected = newLists.find(({ _id }) => _id === listId);
    let cards = listSelected.cards;

    let cardToAdd = { ...payload };
    cardToAdd.listId = listId;

    if (addedIndex === null && removedIndex === null) return;

    if (removedIndex !== null) {
      cardToAdd = cards.splice(removedIndex, 1)[0];
    }

    if (addedIndex !== null) {
      cards.splice(addedIndex, 0, cardToAdd);
    }

    set(newLists);
    dispatch(requestUpdateListOnDrop(listId, cards));

    if (payload.listId !== listId)
      dispatch(requestUpdateCardOnDrop(payload._id, { listId }));
  };

  useEffect(() => {
    if (lists.length !== boardLists.length) set(prevRequests[boardId].lists);
  }, [boardLists]);

  return {
    lists,
    handleOnDrop,
    getCard,
  };
};

export default useDragList;
