import React, { useRef, useMemo, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Container, Draggable } from 'react-smooth-dnd';
import Icons from '../icons';
import IconButton from '../ui/IconButton';
import ButtonAddTarget from './ButtonAddTarget';
import PopoverListActions from './PopoverListActions';
import Card from './Card';
import usePopper from '../hooks/usePopper';
import useToggle from '../hooks/useToggle';
import useList from '../hooks/board/useList';
import { isArray } from '../../utils/typeOf';

const List = ({ onDrop, getChildPayload, id, isMobileMatchMedia }) => {
  const list = useList(id);
  const [showPopoverActions, handleToggleActions] = useToggle(false);
  const lengthCards = useMemo(() => (list ? list.cards.length : 0), [
    list?.cards,
  ]);
  const buttonMore = useRef(null);

  const {
    setPopperElement,
    setReferenceElement,
    styles,
    attributes,
  } = usePopper();

  useEffect(
    () =>
      isMobileMatchMedia
        ? document.body.classList.add('smooth-dnd-mobile')
        : document.body.classList.remove('smooth-dnd-mobile'),
    [isMobileMatchMedia]
  );

  return (
    <Draggable>
      <article className='board-list'>
        <div className='board-list__header'>
          <h3 className='board-list__title'>{list?.title || ''}</h3>
          <IconButton
            ref={(ref) => {
              buttonMore.current = ref;
              setReferenceElement(ref);
            }}
            className='board-list__button-more'
            onClick={handleToggleActions()}
          >
            <Icons.EllipsisV />
          </IconButton>
        </div>
        <div className='board-list__body'>
          <Container
            dragClass='card-ghost'
            dropClass='card-ghost-drop'
            groupName='col'
            dropPlaceholderAnimationDuration={200}
            onDrop={onDrop}
            getChildPayload={getChildPayload}
            dragBeginDelay={isMobileMatchMedia ? 400 : 0}
            dropPlaceholder={{
              animationDuration: 150,
              showOnTop: true,
              className: 'card-drop-preview',
            }}
          >
            {isArray(list?.cards) &&
              list.cards.map((cardId) => <Card key={cardId} id={cardId} />)}
          </Container>
        </div>
        <div className={lengthCards > 1 ? 'mt-4' : ''}>
          <ButtonAddTarget listId={id} />
          {showPopoverActions && (
            <PopoverListActions
              {...attributes}
              ref={setPopperElement}
              style={styles}
              listId={id}
              listName={list?.title || ''}
              onRequestClose={handleToggleActions(false)}
              onOutsideClick={({ target }) => {
                if (target !== buttonMore.current) handleToggleActions(false)();
              }}
            />
          )}
        </div>
      </article>
    </Draggable>
  );
};

List.propTypes = {
  onDrop: PropTypes.func,
  getChildPayload: PropTypes.func,
  id: PropTypes.string.isRequired,
  isMobileMatchMedia: PropTypes.bool,
};

export default List;
