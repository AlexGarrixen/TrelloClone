import React from 'react';
import PropTypes from 'prop-types';
import Button from '../../ui/Button';
import Icons from '../../icons';
import TextField from '../../ui/TextField';
import PopoverAddLabel from '../PopoverAddLabel';
import usePopper from '../../hooks/usePopper';
import useDeleteCard from '../../hooks/useDeleteCard';
import useToggle from '../../hooks/useToggle';

const Actions = ({ onRequestUploadFile }) => {
  const [showPopoverAddLabel, handleTogglePopover] = useToggle(false);
  const { handleDeleteCard, isRequesting: isRequestingDel } = useDeleteCard();
  const {
    setPopperElement,
    setReferenceElement,
    styles,
    attributes,
  } = usePopper();

  return (
    <div className='board-card-edit-form__actions'>
      <TextField
        type='file'
        accept='image/*'
        className='hidden'
        id='contained-button-cover'
        onChange={onRequestUploadFile}
      />
      <label htmlFor='contained-button-cover' className='mb-3 block'>
        <Button component='span' startIcon={<Icons.Image />} fullWidth>
          Cover
        </Button>
      </label>
      <Button
        ref={setReferenceElement}
        startIcon={<Icons.Tag />}
        onClick={handleTogglePopover()}
        fullWidth
      >
        Labels
      </Button>
      <Button
        color='secondary'
        startIcon={<Icons.Trash />}
        onClick={handleDeleteCard}
        fullWidth
      >
        {isRequestingDel ? 'Removing...' : 'Remove'}
      </Button>
      {showPopoverAddLabel && (
        <PopoverAddLabel
          ref={setPopperElement}
          onOutsideClick={handleTogglePopover(false)}
          onRequestClose={handleTogglePopover()}
          style={styles}
          {...attributes}
        />
      )}
    </div>
  );
};

Actions.propTypes = {
  onRequestUploadFile: PropTypes.func,
};

export default Actions;
