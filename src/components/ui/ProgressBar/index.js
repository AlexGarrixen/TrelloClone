import React from 'react';

const ProgressBar = ({ percentage = 0, ...other }) => (
  <div className='progress-bar' {...other}>
    <div className='progress-bar__bar' style={{ width: `${percentage}%` }} />
  </div>
);

export default ProgressBar;
