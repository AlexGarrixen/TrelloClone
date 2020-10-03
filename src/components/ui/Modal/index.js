import React from 'react';
import PropTypes from 'prop-types';
import ReactModal from 'react-modal';
import IconButton from '../IconButton';
import Icons from '../../icons';
import clsx from 'clsx';

const classesSizes = {
  sm: 'modal--sm',
  lg: 'modal--lg',
};

ReactModal.setAppElement('#app');

const Modal = ({ children, isOpen = false, onRequestClose, size = 'sm' }) => (
  <ReactModal
    isOpen={isOpen}
    onRequestClose={onRequestClose}
    className={clsx('modal', classesSizes[size])}
    overlayClassName='modal__overlay'
  >
    <IconButton
      color='primary'
      className='modal__icon-close'
      onClick={onRequestClose}
    >
      <Icons.Close />
    </IconButton>
    {children}
  </ReactModal>
);

Modal.propTypes = {
  children: PropTypes.node,
  isOpen: PropTypes.bool,
  onRequestClose: PropTypes.func,
  size: PropTypes.oneOf(['sm', 'lg']),
};

export default Modal;
