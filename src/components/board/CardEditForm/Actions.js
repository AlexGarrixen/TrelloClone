import React, { useState } from 'react';
import Button from '../../ui/Button';
import Icons from '../../icons';
import PopoverAddLabel from '../PopoverAddLabel';
import usePopper from '../../hooks/usePopper';

const Actions = () => {
  const [showPopoverAddLabel, setShowPopoverAddLabel] = useState(false);
  const handleTogglePopoverAddLabel = () =>
    setShowPopoverAddLabel(!showPopoverAddLabel);
  const {
    setPopperElement,
    setReferenceElement,
    styles,
    attributes,
  } = usePopper();

  return (
    <div className='board-card-edit-form__actions'>
      <Button startIcon={<Icons.Image />} fullWidth>
        Cover
      </Button>
      <Button
        ref={setReferenceElement}
        startIcon={<Icons.Tag />}
        onClick={handleTogglePopoverAddLabel}
        fullWidth
      >
        Labels
      </Button>
      <Button color='secondary' startIcon={<Icons.Trash />} fullWidth>
        Remove
      </Button>
      {showPopoverAddLabel && (
        <PopoverAddLabel
          ref={setPopperElement}
          onOutsideClick={handleTogglePopoverAddLabel}
          onRequestClose={handleTogglePopoverAddLabel}
          style={styles}
          {...attributes}
        />
      )}
    </div>
  );
};

export default Actions;
