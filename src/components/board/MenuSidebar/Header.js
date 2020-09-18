import React from 'react';
import IconButton from '../../ui/IconButton';
import TextField from '../../ui/TextField';
import Icons from '../../icons';

const MenuHeader = () => (
  <div className='board-menu-sidebar__header'>
    <TextField
      value='Title Board'
      className='board-menu-sidebar__header-textfield-title'
      fullWidth
    />
    <IconButton
      variant='text'
      className='board-menu-sidebar__header-button-close'
    >
      <Icons.Close />
    </IconButton>
  </div>
);

export default MenuHeader;
