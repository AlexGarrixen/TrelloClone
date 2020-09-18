import React from 'react';
import Button from '../../ui/Button';
import Icons from '../../icons';

const MenuFooterActions = () => (
  <div className='board-menu-sidebar__footer-actions'>
    <Button color='secondary' startIcon={<Icons.Close />}>
      Delete board
    </Button>
  </div>
);

export default MenuFooterActions;
