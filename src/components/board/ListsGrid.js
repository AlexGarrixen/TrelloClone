import React from 'react';
import List from './List';
import Card from './Card';
import ButtonAddList from './ButtonAddList';
import useDragList from '../hooks/useDragList';
import useMatchMedia from '../hooks/useMatchMedia';
import { isArray } from '../../utils/typeOf';

const ListsGrid = () => {
  const { lists, handleOnDrop, getCard } = useDragList();
  const { isMatchMedia } = useMatchMedia('(max-width: 768px)');

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
            isMobileMatchMedia={isMatchMedia}
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
