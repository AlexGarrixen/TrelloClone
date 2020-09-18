import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';
import OutsideClickHandler from 'react-outside-click-handler';

const PopoverListOptions = forwardRef(({ onOutsideClick, ...other }, ref) => (
  <OutsideClickHandler onOutsideClick={onOutsideClick}>
    <ul ref={ref} className='board-popover-list-options' {...other}>
      <li className='board-popover-list-options__option'>Delete this list</li>
    </ul>
  </OutsideClickHandler>
));

PopoverListOptions.propTypes = {
  onOutsideClick: PropTypes.func,
};

export default PopoverListOptions;
