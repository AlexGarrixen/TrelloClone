import React, { forwardRef } from 'react';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import OutsideClickHandler from 'react-outside-click-handler';
import { requestDeleteList } from '../../redux/actions/board';

const PopoverListOptions = forwardRef(
  ({ onOutsideClick, listId, ...other }, ref) => {
    const dispatch = useDispatch();
    const handleDeleteList = () => dispatch(requestDeleteList(listId));

    return (
      <OutsideClickHandler onOutsideClick={onOutsideClick}>
        <ul ref={ref} className='board-popover-list-options' {...other}>
          <li
            className='board-popover-list-options__option'
            onClick={handleDeleteList}
          >
            Delete this list
          </li>
        </ul>
      </OutsideClickHandler>
    );
  }
);

PopoverListOptions.propTypes = {
  onOutsideClick: PropTypes.func,
  listId: PropTypes.string.isRequired,
};

export default PopoverListOptions;
