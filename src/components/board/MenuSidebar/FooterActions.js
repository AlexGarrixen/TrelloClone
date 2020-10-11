import React from 'react';
import Button from '../../ui/Button';
import Icons from '../../icons';
import useDeleteBoard from '../../hooks/board/useDeleteBoard';

const MenuFooterActions = () => {
  const { isRequesting, handleDeleteBoard } = useDeleteBoard();

  return (
    <div className='board-menu-sidebar__footer-actions'>
      <Button
        color='secondary'
        onClick={handleDeleteBoard}
        startIcon={<Icons.Close />}
      >
        {isRequesting ? 'Deleting...' : 'Delete board'}
      </Button>
    </div>
  );
};

export default MenuFooterActions;
