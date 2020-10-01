import React, { useRef, useMemo, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Container, Draggable } from 'react-smooth-dnd';
import Icons from '../icons';
import IconButton from '../ui/IconButton';
import ButtonAddTarget from './ButtonAddTarget';
import PopoverListOptions from './PopoverListOptions';
import usePopper from '../hooks/usePopper';
import useToggle from '../hooks/useToggle';

const List = ({
  children,
  onDrop,
  getChildPayload,
  title,
  id,
  isMobileMatchMedia,
}) => {
  const [showPopoverOptions, handleToggleOptions] = useToggle(false);
  const lengthChildrens = useMemo(() => children.length, [children]);
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
          <h3 className='board-list__title'>{title}</h3>
          <IconButton
            ref={(ref) => {
              buttonMore.current = ref;
              setReferenceElement(ref);
            }}
            className='board-list__button-more'
            onClick={handleToggleOptions()}
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
            {children}
          </Container>
        </div>
        <div className={lengthChildrens > 1 ? 'mt-4' : ''}>
          <ButtonAddTarget listId={id} />
          {showPopoverOptions && (
            <PopoverListOptions
              {...attributes}
              ref={setPopperElement}
              style={styles}
              listId={id}
              onOutsideClick={({ target }) => {
                if (target !== buttonMore.current) handleToggleOptions(false)();
              }}
            />
          )}
        </div>
      </article>
    </Draggable>
  );
};

List.propTypes = {
  children: PropTypes.node,
  onDrop: PropTypes.func,
  getChildPayload: PropTypes.func,
  title: PropTypes.string,
  id: PropTypes.string.isRequired,
  isMobileMatchMedia: PropTypes.bool,
};

export default List;
