import React from 'react';
import Header from './Header';
import Description from './Description';
import Picture from './Picture';
import FooterActions from './FooterActions';

const MenuSidebar = () => (
  <div className='board-menu-sidebar'>
    <Header />
    <div className='board-menu-sidebar__body'>
      <Picture />
      <Description />
    </div>
    <FooterActions />
  </div>
);

export default MenuSidebar;
