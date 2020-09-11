import React, { useState } from 'react';
import Modal from 'react-modal';
import Container from '../components/layout/Container';
import ButtonAdd from '../components/boards/ButtonAdd';
import BoardsGrid from '../components/boards/BoardsGrid';
import BoardRegisterForm from '../components/boards/BoardRegisterForm';

Modal.setAppElement('#app');

const Boards = () => {
  const [showModal, set] = useState(false);
  const handleToggleModal = () => set((state) => !state);

  return (
    <section className='boards'>
      <Container>
        <div className='boards__actions'>
          <h3>All Boards</h3>
          <ButtonAdd onClick={handleToggleModal} />
        </div>
        <BoardsGrid />
      </Container>
      <Modal
        isOpen={showModal}
        onRequestClose={handleToggleModal}
        className='modal modal--sm'
        overlayClassName='modal__overlay'
      >
        <BoardRegisterForm />
      </Modal>
    </section>
  );
};

export default Boards;
