import React from 'react';
import PropTypes from 'prop-types';
import ProgressBar from '../ui/ProgressBar';
import clsx from 'clsx';

const UploadFile = ({ filename, className, percentage }) => (
  <div className={clsx('upload-file', className)}>
    <div className='upload-file__header'>
      <p className='upload-file__filename'>{filename}</p>
      <p className='upload-file__progress'>{percentage}%</p>
    </div>
    <ProgressBar percentage={percentage} />
  </div>
);

UploadFile.propTypes = {
  filename: PropTypes.string,
  className: PropTypes.string,
  percentage: PropTypes.string,
};

export default UploadFile;
