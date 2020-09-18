import React from 'react';
import Button from '../ui/Button';
import Icons from '../icons';

const HeaderActions = () => (
  <div className='board-header-actions'>
    <div className='flex items-center'>
      <h2 className='board-header-actions__board-title'>Board Title</h2>
      <span className='board-header-actions__board-title-separator' />
      <Button startIcon={<Icons.Th />}>All board</Button>
    </div>
    <Button startIcon={<Icons.EllipsisV className='mr-2' />}>Show Menu</Button>
  </div>
);

export default HeaderActions;
