import React from 'react';
import PropTypes from 'prop-types';
import sizes from './sizes';

const Tag = ({ size = 'sm', ...other }) => (
  <span>
    <svg
      aria-hidden='true'
      data-prefix='fas'
      data-icon='tag'
      className='prefix__svg-inline--fa prefix__fa-tag prefix__fa-w-16'
      viewBox='0 0 512 512'
      {...sizes[size]}
      {...other}
    >
      <path
        fill='currentColor'
        d='M0 252.118V48C0 21.49 21.49 0 48 0h204.118a48 48 0 0133.941 14.059l211.882 211.882c18.745 18.745 18.745 49.137 0 67.882L293.823 497.941c-18.745 18.745-49.137 18.745-67.882 0L14.059 286.059A48 48 0 010 252.118zM112 64c-26.51 0-48 21.49-48 48s21.49 48 48 48 48-21.49 48-48-21.49-48-48-48z'
      />
    </svg>
  </span>
);

Tag.propTypes = {
  size: PropTypes.oneOf(['sm', 'md']),
};

export default Tag;
