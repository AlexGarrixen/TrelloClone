import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Button from '../ui/Button';
import Icons from '../icons';
import useBoardSidebarMenu from '../hooks/board/useBoardSidebarMenu';

const HeaderActions = ({ title }) => {
  const { handleToggle } = useBoardSidebarMenu();

  return (
    <div className='board-header-actions'>
      <div className='flex items-center'>
        <h2 className='board-header-actions__board-title'>{title}</h2>
        <span className='board-header-actions__board-title-separator' />
        <Button component={Link} to='/' startIcon={<Icons.Th />}>
          All board
        </Button>
      </div>
      <Button
        startIcon={<Icons.EllipsisV className='mr-2' />}
        onClick={() => handleToggle()}
      >
        Show Menu
      </Button>
    </div>
  );
};

HeaderActions.propTypes = {
  title: PropTypes.string,
};

export default HeaderActions;
