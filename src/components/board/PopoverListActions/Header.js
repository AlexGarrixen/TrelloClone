import React from 'react';
import PropTypes from 'prop-types';
import IconButton from '../../ui/IconButton';
import Icons from '../../icons';

const Header = ({
  onRequestClose,
  onRequestBack,
  children,
  showIconBack = false,
}) => (
  <div className='board-popover-list-options__header'>
    {showIconBack && (
      <IconButton
        variant='text'
        className='board-popover-list-options__header-button-back'
        onClick={onRequestBack}
      >
        <Icons.AngleLeft />
      </IconButton>
    )}
    <span className='board-popover-list-options__header-title'>{children}</span>
    <IconButton
      variant='text'
      className='board-popover-list-options__header-button-close'
      onClick={onRequestClose}
    >
      <Icons.Close />
    </IconButton>
  </div>
);

Header.propTypes = {
  onRequestClose: PropTypes.func,
  onRequestBack: PropTypes.func,
  children: PropTypes.node,
  showIconBack: PropTypes.bool,
};

export default Header;
