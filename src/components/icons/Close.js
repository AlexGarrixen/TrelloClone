import React from 'react';
import PropTypes from 'prop-types';
import sizes from './sizes';

const Close = ({ size = 'sm', ...other }) => (
  <span>
    <svg
      aria-hidden='true'
      data-prefix='fas'
      data-icon='times'
      className='prefix__svg-inline--fa prefix__fa-times prefix__fa-w-11'
      viewBox='0 0 352 512'
      {...sizes[size]}
      {...other}
    >
      <path
        fill='currentColor'
        d='M242.72 256l100.07-100.07c12.28-12.28 12.28-32.19 0-44.48l-22.24-22.24c-12.28-12.28-32.19-12.28-44.48 0L176 189.28 75.93 89.21c-12.28-12.28-32.19-12.28-44.48 0L9.21 111.45c-12.28 12.28-12.28 32.19 0 44.48L109.28 256 9.21 356.07c-12.28 12.28-12.28 32.19 0 44.48l22.24 22.24c12.28 12.28 32.2 12.28 44.48 0L176 322.72l100.07 100.07c12.28 12.28 32.2 12.28 44.48 0l22.24-22.24c12.28-12.28 12.28-32.19 0-44.48L242.72 256z'
      />
    </svg>
  </span>
);

Close.propTypes = {
  size: PropTypes.oneOf(['xs', 'sm', 'md']),
};

export default Close;
