import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Modal from 'react-modal';
import Container from '../components/layout/Container';
import ButtonAdd from '../components/boards/ButtonAdd';
import BoardsGrid from '../components/boards/BoardsGrid';
import BoardRegisterForm from '../components/boards/BoardRegisterForm';
import { setShowRegistrationModal } from '../redux/actions/boards';
import useFetchBoards from '../components/hooks/useFetchBoards';

Modal.setAppElement('#app');

const Boards = () => {
  const dispatch = useDispatch();
  const { registrationModalOpen } = useSelector(({ boards }) => boards);

  useFetchBoards();

  return (
    <section className='boards'>
      <Container>
        <div className='boards__actions'>
          <h3>All Boards</h3>
          <ButtonAdd onClick={() => dispatch(setShowRegistrationModal(true))} />
        </div>
        <BoardsGrid />
      </Container>
      <Modal
        isOpen={registrationModalOpen}
        onRequestClose={() => dispatch(setShowRegistrationModal(false))}
        className='modal modal--sm'
        overlayClassName='modal__overlay'
      >
        <BoardRegisterForm />
      </Modal>
    </section>
  );
};

export default Boards;
