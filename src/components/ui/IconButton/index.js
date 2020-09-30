import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import capitalize from '../../../utils/capitalize';
import classes from './classes';

const IconButton = forwardRef(
  (
    {
      children,
      component: Component = 'button',
      className,
      color = 'default',
      variant = 'contained',
      type = 'button',
      ...other
    },
    ref
  ) => (
    <Component
      {...other}
      ref={ref}
      type={type}
      className={clsx(
        classes.default,
        classes[`${variant}${capitalize(color)}`],
        className
      )}
    >
      {children}
    </Component>
  )
);

IconButton.propTypes = {
  children: PropTypes.node,
  component: PropTypes.elementType,
  color: PropTypes.oneOf(['default', 'primary', 'secondary']),
  variant: PropTypes.oneOf(['text', 'contained', 'outlined']),
  type: PropTypes.string,
};

export default IconButton;
