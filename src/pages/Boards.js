import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Container from '../components/layout/Container';
import ButtonAdd from '../components/boards/ButtonAdd';
import BoardsGrid from '../components/boards/BoardsGrid';
import BoardRegisterForm from '../components/boards/BoardRegisterForm';
import { setShowRegistrationModal } from '../redux/actions/boards';
import useFetchBoards from '../components/hooks/useFetchBoards';

const Boards = () => {
  const dispatch = useDispatch();
  const { registrationModalOpen } = useSelector(({ boards }) => boards);

  useFetchBoards();

  return (
    <section className='boards'>
      <Container>
        <div className='boards-actions-header'>
          <h3 className='boards-actions-header__title'>All Boards</h3>
          <ButtonAdd onClick={() => dispatch(setShowRegistrationModal(true))} />
        </div>
        <BoardsGrid />
      </Container>
      <BoardRegisterForm isOpen={registrationModalOpen} />
    </section>
  );
};

export default Boards;
