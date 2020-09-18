import React, { useState, useRef, useMemo } from 'react';
import PropTypes from 'prop-types';
import { Container } from 'react-smooth-dnd';
import Icons from '../icons';
import IconButton from '../ui/IconButton';
import ButtonAddTarget from './ButtonAddTarget';
import PopoverListOptions from './PopoverListOptions';
import usePopper from '../hooks/usePopper';

const List = ({ children, onDrop, getChildPayload }) => {
  const [showPopoverOptions, setShowPopoverOptions] = useState(false);
  const buttonMore = useRef(null);
  const lengthChildrens = useMemo(() => children.length, [children]);

  const handleTogglePopoverOptions = () =>
    setShowPopoverOptions(!showPopoverOptions);

  const {
    setPopperElement,
    setReferenceElement,
    styles,
    attributes,
  } = usePopper();

  return (
    <article className='board-list'>
      <div className='board-list__header'>
        <h3 className='board-list__title'>Title</h3>
        <IconButton
          ref={(ref) => {
            buttonMore.current = ref;
            setReferenceElement(ref);
          }}
          className='board-list__button-more'
          onClick={handleTogglePopoverOptions}
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
        <ButtonAddTarget />
        {showPopoverOptions && (
          <PopoverListOptions
            {...attributes}
            ref={setPopperElement}
            style={styles}
            onOutsideClick={({ target }) => {
              if (target !== buttonMore.current) handleTogglePopoverOptions();
            }}
          />
        )}
      </div>
    </article>
  );
};

List.propTypes = {
  children: PropTypes.node,
  onDrop: PropTypes.func,
  getChildPayload: PropTypes.func,
};

export default List;
