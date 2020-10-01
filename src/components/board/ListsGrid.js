import React from 'react';
import { Container } from 'react-smooth-dnd';
import List from './List';
import Card from './Card';
import ButtonAddList from './ButtonAddList';
import useDragList from '../hooks/useDragList';
import useMatchMedia from '../hooks/useMatchMedia';
import { isArray } from '../../utils/typeOf';

const ListsGrid = () => {
  const { lists, handleOnDrop, handleOnDropColumn, getCard } = useDragList();
  const { isMatchMedia } = useMatchMedia('(max-width: 768px)');

  return (
    <div className='board-lists-grid'>
      <div className='flex h-full'>
        <Container
          orientation='horizontal'
          dragHandleSelector='.board-list__header'
          onDrop={handleOnDropColumn}
          getChildPayload={(idx) => idx}
          dragClass='list-ghost'
          dropClass='list-ghost-drop'
          dropPlaceholderAnimationDuration={200}
          dragBeginDelay={isMatchMedia ? 400 : 0}
          dropPlaceholder={{
            animationDuration: 150,
            showOnTop: true,
            className: 'list-drop-preview',
          }}
        >
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
        </Container>
        <ButtonAddList />
      </div>
    </div>
  );
};

export default ListsGrid;
