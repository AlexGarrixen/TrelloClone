import React from 'react';
import Header from './Header';
import Description from './Description';
import FooterActions from './FooterActions';

const MenuSidebar = () => (
  <div className='board-menu-sidebar'>
    <Header />
    <Description />
    <FooterActions />
  </div>
);

export default MenuSidebar;
