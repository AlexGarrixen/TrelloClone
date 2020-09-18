import { useState } from 'react';

const useDragList = () => {
  const [lists, set] = useState([
    {
      id: 123,
      cards: [
        {
          id: 90,
          title: 'Team 1',
        },
        {
          id: 212,
          title: 'Team 2',
        },
        {
          id: 521,
          title: 'Team 3',
        },
      ],
    },
    {
      id: 456,
      cards: [
        {
          id: 928,
          title: 'Team 4',
        },
        {
          id: 322,
          title: 'Team 4',
        },
      ],
    },
  ]);

  const getCard = (cardIdx, listId) => {
    const list = lists.find((list) => list.id === listId);
    const card = list.cards[cardIdx];
    return card;
  };

  const handleOnDrop = (listId, dragResult) => {
    const { addedIndex, removedIndex, payload } = dragResult;
    const newLists = [...lists];
    const listSelected = newLists.find(({ id }) => id === listId);
    let cards = listSelected.cards;

    let cardToAdd = payload;

    if (addedIndex === null && removedIndex === null) return;

    if (removedIndex !== null) {
      cardToAdd = cards.splice(removedIndex, 1)[0];
    }

    if (addedIndex !== null) {
      cards.splice(addedIndex, 0, cardToAdd);
    }

    set(newLists);
  };

  return {
    lists,
    handleOnDrop,
    getCard,
  };
};

export default useDragList;
