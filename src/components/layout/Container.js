import React from 'react';
import PropTypes from 'prop-types';

const Container = ({ children, component: Component = 'div' }) => (
  <Component className='container mx-auto px-2'>{children}</Component>
);

Container.propTypes = {
  children: PropTypes.node,
  component: PropTypes.elementType,
};

export default Container;
