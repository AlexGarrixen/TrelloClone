import React from 'react';
import ListsGrid from '../components/board/ListsGrid';
import Modal from 'react-modal';
import CardEditForm from '../components/board/CardEditForm';
import HeaderActions from '../components/board/HeaderActions';
import MenuSidebar from '../components/board/MenuSidebar/index';

Modal.setAppElement('#app');

const Board = () => (
  <section className='board'>
    <HeaderActions />
    <ListsGrid />
    <Modal
      className='modal modal--lg'
      overlayClassName='modal__overlay'
      isOpen={false}
    >
      <CardEditForm />
    </Modal>
    {false && <MenuSidebar />}
  </section>
);

export default Board;
