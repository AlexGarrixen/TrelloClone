import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';

const Card = ({
  children,
  component: Component = 'article',
  className,
  picture,
  title,
  ...other
}) => (
  <Component className={clsx('card', className)} {...other}>
    <div
      className='card__picture'
      style={{ backgroundImage: `url(${picture})` }}
    />
    <h2 className='card__title'>{title}</h2>
    {children}
  </Component>
);

Card.propTypes = {
  title: PropTypes.string,
  picture: PropTypes.string,
  children: PropTypes.node,
  component: PropTypes.elementType,
};

export default Card;
