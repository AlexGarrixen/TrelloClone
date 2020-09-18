import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';
import OutsideClickHandler from 'react-outside-click-handler';
import TextField from '../ui/TextField';
import IconButton from '../ui/IconButton';
import Button from '../ui/Button';
import Icons from '../icons';

const PopoverAddLabel = forwardRef(
  ({ onOutsideClick, onRequestClose, ...other }, ref) => {
    const colors = ['blue', 'green', 'orange', 'purple', 'yellow'];

    return (
      <OutsideClickHandler onOutsideClick={onOutsideClick}>
        <div ref={ref} className='board-popover-add-label' {...other}>
          <div className='board-popover-add-label__header'>
            <div>
              <h3 className='board-popover-add-label__header-title'>Label</h3>
              <p className='board-popover-add-label__header-text-help'>
                Select a name and color
              </p>
            </div>
            <IconButton
              className='board-popover-add-label__header-button-close'
              variant='text'
              onClick={onRequestClose}
            >
              <Icons.Close />
            </IconButton>
          </div>
          <TextField placeholder='label' fullWidth />
          <ul className='board-popover-add-label__grid-colors'>
            {colors.map((color) => (
              <li
                key={color}
                className={`board-popover-add-label__color color--${color}`}
              />
            ))}
          </ul>
          <Button color='primary'>Add</Button>
        </div>
      </OutsideClickHandler>
    );
  }
);

PopoverAddLabel.propTypes = {
  onOutsideClick: PropTypes.func,
  onRequestClose: PropTypes.func,
};

export default PopoverAddLabel;
