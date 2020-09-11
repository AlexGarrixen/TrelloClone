import React from 'react';
import PropTypes from 'prop-types';
import sizes from './sizes';

const Plus = ({ size = 'sm', ...other }) => (
  <span>
    <svg
      aria-hidden='true'
      data-prefix='fas'
      data-icon='plus'
      className='prefix__svg-inline--fa prefix__fa-plus prefix__fa-w-14'
      viewBox='0 0 448 512'
      {...sizes[size]}
      {...other}
    >
      <path
        fill='currentColor'
        d='M416 208H272V64c0-17.67-14.33-32-32-32h-32c-17.67 0-32 14.33-32 32v144H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h144v144c0 17.67 14.33 32 32 32h32c17.67 0 32-14.33 32-32V304h144c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z'
      />
    </svg>
  </span>
);

Plus.propTypes = {
  size: PropTypes.oneOf(['sm', 'md']),
};

export default Plus;
