import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import capitalize from '../../../utils/capitalize';
import classes from './classes';

const Button = ({
  children,
  className,
  component: Component = 'button',
  color = 'default',
  variant = 'contained',
  disabled = false,
  startIcon,
  endIcon,
  ...other
}) => (
  <Component
    {...other}
    disabled={disabled}
    className={clsx(
      classes.default,
      classes[`${variant}${capitalize(color)}`],
      disabled && classes.disabled,
      startIcon && classes.startIcon,
      endIcon && classes.endIcon,
      className
    )}
  >
    {startIcon && startIcon}
    {children}
    {endIcon && endIcon}
  </Component>
);

Button.propTypes = {
  children: PropTypes.node,
  component: PropTypes.elementType,
  color: PropTypes.oneOf(['default', 'primary', 'secondary']),
  variant: PropTypes.oneOf(['text', 'contained', 'outlined']),
  disabled: PropTypes.bool,
  startIcon: PropTypes.node,
};

export default Button;
