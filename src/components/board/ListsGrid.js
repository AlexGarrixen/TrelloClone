import React from 'react';
import List from './List';
import Card from './Card';
import ButtonAddList from './ButtonAddList';
import useDragList from '../hooks/useDragList';

const ListsGrid = () => {
  const { lists, handleOnDrop, getCard } = useDragList();

  return (
    <ul className='board-lists-grid'>
      {lists.map(({ cards, id }) => (
        <List
          key={id}
          onDrop={(e) => handleOnDrop(id, e)}
          getChildPayload={(idx) => getCard(idx, id)}
        >
          {cards.map((props) => (
            <Card key={props.id} {...props} />
          ))}
        </List>
      ))}
      <ButtonAddList />
    </ul>
  );
};

export default ListsGrid;
