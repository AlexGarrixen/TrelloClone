import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import Icons from '../../icons';
import capitalize from '../../../utils/capitalize';
import classes from './classes';

const Alert = ({ severity = 'success', className, children, ...other }) => (
  <div
    {...other}
    className={clsx(
      classes.default,
      classes[`severity${capitalize(severity)}`],
      className
    )}
  >
    {severity === 'success' && <Icons.Check size='md' />}
    {severity === 'info' && <Icons.Info size='md' />}
    {severity === 'warning' && <Icons.Warning size='md' />}
    {severity === 'error' && <Icons.Error size='md' />}
    <div className='alert__message'>{children}</div>
  </div>
);

Alert.propTypes = {
  severity: PropTypes.oneOf(['error', 'warning', 'info', 'success']),
  children: PropTypes.node,
};

export default Alert;
