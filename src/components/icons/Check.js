import React from 'react';
import PropTypes from 'prop-types';
import sizes from './sizes';

const Check = ({ size = 'sm', ...other }) => (
  <span>
    <svg
      aria-hidden='true'
      data-prefix='fas'
      data-icon='check'
      className='prefix__svg-inline--fa prefix__fa-check prefix__fa-w-16'
      viewBox='0 0 512 512'
      {...sizes[size]}
      {...other}
    >
      <path
        fill='currentColor'
        d='M173.898 439.404l-166.4-166.4c-9.997-9.997-9.997-26.206 0-36.204l36.203-36.204c9.997-9.998 26.207-9.998 36.204 0L192 312.69 432.095 72.596c9.997-9.997 26.207-9.997 36.204 0l36.203 36.204c9.997 9.997 9.997 26.206 0 36.204l-294.4 294.401c-9.998 9.997-26.207 9.997-36.204-.001z'
      />
    </svg>
  </span>
);

Check.propTypes = {
  size: PropTypes.oneOf(['sm', 'md']),
};

export default Check;
