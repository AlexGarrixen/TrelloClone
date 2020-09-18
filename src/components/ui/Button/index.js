import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import capitalize from '../../../utils/capitalize';
import classes from './classes';

const Button = forwardRef(
  (
    {
      children,
      className,
      component: Component = 'button',
      color = 'default',
      variant = 'contained',
      disabled = false,
      startIcon,
      endIcon,
      fullWidth = false,
      ...other
    },
    ref
  ) => (
    <Component
      {...other}
      ref={ref}
      disabled={disabled}
      className={clsx(
        classes.default,
        classes[`${variant}${capitalize(color)}`],
        disabled && classes.disabled,
        startIcon && classes.startIcon,
        endIcon && classes.endIcon,
        fullWidth && classes.fullWidth,
        className
      )}
    >
      {startIcon && startIcon}
      {children}
      {endIcon && endIcon}
    </Component>
  )
);

Button.propTypes = {
  children: PropTypes.node,
  component: PropTypes.elementType,
  color: PropTypes.oneOf(['default', 'primary', 'secondary']),
  variant: PropTypes.oneOf(['text', 'contained', 'outlined']),
  disabled: PropTypes.bool,
  startIcon: PropTypes.node,
  fullWidth: PropTypes.bool,
};

export default Button;
