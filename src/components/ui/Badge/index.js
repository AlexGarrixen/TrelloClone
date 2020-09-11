import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import capitalize from '../../../utils/capitalize';
import classes from './classes';

const Badge = ({
  children,
  className,
  component: Component = 'span',
  color = 'blue',
  ...other
}) => (
  <Component
    className={clsx(
      classes.default,
      [`${classes[`color${capitalize(color)}`]}`],
      className
    )}
    {...other}
  >
    {children}
  </Component>
);

Badge.propTypes = {
  children: PropTypes.node,
  component: PropTypes.elementType,
  color: PropTypes.string,
};

export default Badge;
