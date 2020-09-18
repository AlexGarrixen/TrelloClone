import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';
import OutsideClickHandler from 'react-outside-click-handler';
import Button from '../ui/Button';
import IconButton from '../ui/IconButton';
import Icons from '../icons';

const PopoverDelete = forwardRef(
  (
    {
      onOutsideClick,
      onRequestClose,
      headerTitle,
      textWarning,
      buttonText,
      ...other
    },
    ref
  ) => (
    <OutsideClickHandler onOutsideClick={onOutsideClick}>
      <div ref={ref} className='board-popover-delete-comment' {...other}>
        <div className='board-popover-delete-comment__header'>
          <span className='board-popover-delete-comment__header-title'>
            {headerTitle}
          </span>
          <IconButton
            className='board-popover-delete-comment__header-button-close'
            variant='text'
            onClick={onRequestClose}
          >
            <Icons.Close />
          </IconButton>
        </div>
        <div className='board-popover-delete-comment__body'>
          <p className='board-popover-delete-comment__text-warning'>
            {textWarning}
          </p>
          <Button className='mt-4' color='secondary'>
            {buttonText}
          </Button>
        </div>
      </div>
    </OutsideClickHandler>
  )
);

PopoverDelete.propTypes = {
  onOutsideClick: PropTypes.func,
  onRequestClose: PropTypes.func,
  headerTitle: PropTypes.string,
  buttonText: PropTypes.string,
  textWarning: PropTypes.string,
};

export default PopoverDelete;
