import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';
import OutsideClickHandler from 'react-outside-click-handler';
import Header from './Header';
import ViewEditListTitle from './ViewEditListTitle';
import useDeleteBoardList from '../../hooks/board/useDeleteList';
import useTab from '../../hooks/useTab';

const PopoverListActions = forwardRef(
  ({ onOutsideClick, onRequestClose, listId, listName, ...other }, ref) => {
    const { isRequesting, handleDeleteBoardList } = useDeleteBoardList(listId);
    const { value, setTabValue } = useTab('');

    return (
      <OutsideClickHandler onOutsideClick={onOutsideClick}>
        <div ref={ref} className='board-popover-list-options' {...other}>
          <Header
            showIconBack={Boolean(value)}
            onRequestClose={onRequestClose}
            onRequestBack={setTabValue('')}
          >
            {!value ? 'Actions' : value}
          </Header>
          {!value ? (
            <ul>
              <li
                className='board-popover-list-options__option'
                onClick={setTabValue('Edit title')}
              >
                Edit title
              </li>
              <li
                className='board-popover-list-options__option'
                onClick={handleDeleteBoardList}
              >
                {isRequesting ? 'Deleting...' : 'Delete this list'}
              </li>
            </ul>
          ) : (
            <>
              {value === 'Edit title' && (
                <ViewEditListTitle
                  listId={listId}
                  listName={listName}
                  onRequestCancel={onRequestClose}
                  onRequestSuccess={onRequestClose}
                />
              )}
            </>
          )}
        </div>
      </OutsideClickHandler>
    );
  }
);

PopoverListActions.propTypes = {
  onOutsideClick: PropTypes.func,
  onRequestClose: PropTypes.func,
  listId: PropTypes.string.isRequired,
  listName: PropTypes.string.isRequired,
};

export default PopoverListActions;
