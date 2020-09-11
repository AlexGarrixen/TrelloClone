import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import capitalize from '../../../utils/capitalize';
import classes from './classes';

const IconButton = ({
  children,
  component: Component = 'button',
  className,
  color = 'default',
  variant = 'contained',
  ...other
}) => (
  <Component
    {...other}
    className={clsx(
      classes.default,
      classes[`${variant}${capitalize(color)}`],
      className
    )}
  >
    {children}
  </Component>
);

IconButton.propTypes = {
  children: PropTypes.node,
  component: PropTypes.element,
  color: PropTypes.oneOf(['default', 'primary', 'secondary']),
  variant: PropTypes.oneOf(['text', 'contained', 'outlined']),
};

export default IconButton;
