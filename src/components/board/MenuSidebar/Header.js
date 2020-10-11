import React from 'react';
import IconButton from '../../ui/IconButton';
import TextField from '../../ui/TextField';
import Icons from '../../icons';
import useBoardSidebarMenu from '../../hooks/board/useBoardSidebarMenu';
import useUpdateBoardTitle from '../../hooks/board/useUpdateBoardTitle';

const MenuHeader = () => {
  const { handleToggle } = useBoardSidebarMenu();
  const { form, handleChange, handleSubmit } = useUpdateBoardTitle();

  return (
    <div className='board-menu-sidebar__header'>
      <TextField
        value={form.title}
        onChange={handleChange}
        onBlur={handleSubmit}
        name='title'
        className='board-menu-sidebar__header-textfield-title'
        autoComplete='off'
        fullWidth
      />
      <IconButton
        variant='text'
        className='board-menu-sidebar__header-button-close'
        onClick={() => handleToggle()}
      >
        <Icons.Close />
      </IconButton>
    </div>
  );
};

export default MenuHeader;
