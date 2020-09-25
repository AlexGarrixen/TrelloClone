import React from 'react';
import List from './List';
import Card from './Card';
import ButtonAddList from './ButtonAddList';
import useDragList from '../hooks/useDragList';
import { isArray } from '../../utils/typeOf';

const ListsGrid = () => {
  const { lists, handleOnDrop, getCard } = useDragList(lists);

  return (
    <ul className='board-lists-grid'>
      {isArray(lists) &&
        lists.map(({ cards, _id, title }) => (
          <List
            key={_id}
            onDrop={(e) => handleOnDrop(_id, e)}
            getChildPayload={(idx) => getCard(idx, _id)}
            title={title}
            id={_id}
          >
            {isArray(cards) &&
              cards.map((props) => <Card key={props._id} {...props} />)}
          </List>
        ))}
      <ButtonAddList />
    </ul>
  );
};

export default ListsGrid;
