import React from 'react';
import Container from '../components/layout/Container';
import ButtonAdd from '../components/boards/ButtonAdd';
import BoardsGrid from '../components/boards/BoardsGrid';
import BoardRegisterForm from '../components/boards/BoardRegisterForm';
import useFetchBoards from '../components/hooks/boards/useFetchBoards';
import useRegistrationForm from '../components/hooks/boards/useRegistrationForm';
import useBoards from '../components/hooks/boards/useBoards';
import SkeletonBoards from '../components/layout/SkeletonBoards';
import Alert from '../components/ui/Alert';

const Boards = () => {
  const { isVisible, handleVisibility } = useRegistrationForm();
  const { isFetching, error, boards } = useBoards();

  useFetchBoards();

  return (
    <section className='boards'>
      <Container>
        <div className='boards-actions-header'>
          <h3 className='boards-actions-header__title'>All Boards</h3>
          <ButtonAdd onClick={handleVisibility(true)} />
        </div>
        {error ? (
          <Alert severity='error'>{error}</Alert>
        ) : isFetching ? (
          <SkeletonBoards count={4} />
        ) : (
          <BoardsGrid boards={boards} />
        )}
      </Container>
      <BoardRegisterForm isOpen={isVisible} />
    </section>
  );
};

export default Boards;
