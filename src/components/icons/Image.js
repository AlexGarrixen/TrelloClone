import React from 'react';
import PropTypes from 'prop-types';
import sizes from './sizes';

const Image = ({ size = 'sm', ...other }) => (
  <span>
    <svg
      aria-hidden='true'
      data-prefix='fas'
      data-icon='file-image'
      className='prefix__svg-inline--fa prefix__fa-file-image prefix__fa-w-12'
      viewBox='0 0 384 512'
      {...sizes[size]}
      {...other}
    >
      <path
        fill='currentColor'
        d='M384 121.941V128H256V0h6.059a24 24 0 0116.97 7.029l97.941 97.941a24.002 24.002 0 017.03 16.971zM248 160c-13.2 0-24-10.8-24-24V0H24C10.745 0 0 10.745 0 24v464c0 13.255 10.745 24 24 24h336c13.255 0 24-10.745 24-24V160H248zm-135.455 16c26.51 0 48 21.49 48 48s-21.49 48-48 48-48-21.49-48-48 21.491-48 48-48zm208 240h-256l.485-48.485L104.545 328c4.686-4.686 11.799-4.201 16.485.485L160.545 368 264.06 264.485c4.686-4.686 12.284-4.686 16.971 0L320.545 304v112z'
      />
    </svg>
  </span>
);

Image.propTypes = {
  size: PropTypes.oneOf(['sm', 'md']),
};

export default Image;
