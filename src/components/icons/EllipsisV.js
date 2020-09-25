import React from 'react';
import PropTypes from 'prop-types';
import sizes from './sizes';

const EllipsisV = ({ size = 'sm', ...other }) => (
  <svg
    aria-hidden='true'
    focusable='false'
    data-prefix='fas'
    data-icon='ellipsis-h'
    className='svg-inline--fa fa-ellipsis-h fa-w-16'
    role='img'
    xmlns='http://www.w3.org/2000/svg'
    viewBox='0 0 512 512'
    {...sizes[size]}
    {...other}
  >
    <path
      fill='currentColor'
      d='M328 256c0 39.8-32.2 72-72 72s-72-32.2-72-72 32.2-72 72-72 72 32.2 72 72zm104-72c-39.8 0-72 32.2-72 72s32.2 72 72 72 72-32.2 72-72-32.2-72-72-72zm-352 0c-39.8 0-72 32.2-72 72s32.2 72 72 72 72-32.2 72-72-32.2-72-72-72z'
    ></path>
  </svg>
);

EllipsisV.propTypes = {
  size: PropTypes.oneOf(['xs', 'sm', 'md']),
};

export default EllipsisV;
