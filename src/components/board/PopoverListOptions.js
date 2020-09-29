import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';
import OutsideClickHandler from 'react-outside-click-handler';
import useDeleteBoardList from '../hooks/useDeleteBoardList';

const PopoverListOptions = forwardRef(
  ({ onOutsideClick, listId, ...other }, ref) => {
    const { isRequesting, handleDeleteBoardList } = useDeleteBoardList(listId);

    return (
      <OutsideClickHandler onOutsideClick={onOutsideClick}>
        <ul ref={ref} className='board-popover-list-options' {...other}>
          <li
            className='board-popover-list-options__option'
            onClick={handleDeleteBoardList}
          >
            {isRequesting ? 'Deleting...' : 'Delete this list'}
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
