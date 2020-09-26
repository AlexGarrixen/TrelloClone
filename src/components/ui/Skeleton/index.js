import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';

const colClasses = {
  12: 'w-full',
  8: 'col-8',
  4: 'col-4',
};

const spacings = {
  3: 'space-3',
};

export const Skeleton = ({ children, className, spacing }) => (
  <div className={clsx('skeleton', spacings[spacing], className)}>
    {children}
  </div>
);

export const SkeletonPicture = ({ cols }) => (
  <div className={clsx('skeleton__picture', colClasses[cols])} />
);

export const SkeletonRow = ({ children, className }) => (
  <div className={clsx('skeleton__row', className)}>{children}</div>
);

export const SkeletonCol = ({ cols, className }) => (
  <div className={clsx('skeleton__col', colClasses[cols], className)} />
);

Skeleton.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
};

SkeletonPicture.propTypes = {
  cols: PropTypes.oneOf([4, 8, 12]),
};

SkeletonRow.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
};

SkeletonCol.propTypes = {
  cols: PropTypes.oneOf([4, 8, 12]),
  className: PropTypes.string,
};
