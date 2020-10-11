import React, { useEffect } from 'react';
import ListsGrid from '../components/board/ListsGrid';
import Modal from '../components/ui/Modal';
import Alert from '../components/ui/Alert';
import CardEditForm from '../components/board/CardEditForm';
import HeaderActions from '../components/board/HeaderActions';
import MenuSidebar from '../components/board/MenuSidebar/index';
import SkeletonBoardLists from '../components/layout/SkeletonBoardLists';
import useFetchBoard from '../components/hooks/board/useFetchBoard';
import useEditCardModal from '../components/hooks/board/useEditCardModal';
import useBoardSidebarMenu from '../components/hooks/board/useBoardSidebarMenu';
import useBoardError from '../components/hooks/board/useBoardError';
import useResetBoard from '../components/hooks/board/useResetBoard';
import useBoard from '../components/hooks/board/useBoard';

const Board = () => {
  const isFetching = useFetchBoard();
  const { handleBoardReset } = useResetBoard();
  const { title, notFound } = useBoard();

  const {
    isOpen: isOpenEditCardModal,
    handleCloseCardSelected,
  } = useEditCardModal();

  const { isOpen: isOpenSidebarMenu } = useBoardSidebarMenu();
  const { error, handleClearError } = useBoardError();

  useEffect(() => () => handleBoardReset(), []);

  if (notFound)
    return (
      <Alert severity='info' className='mt-24 mx-6'>
        Board Not Found
      </Alert>
    );

  if (isFetching) return <SkeletonBoardLists />;

  return (
    <section className='board'>
      <HeaderActions title={title} />
      <ListsGrid />
      <Modal
        isOpen={isOpenEditCardModal}
        onRequestClose={handleCloseCardSelected}
        size='lg'
      >
        <CardEditForm />
      </Modal>
      <Modal isOpen={!!error} onRequestClose={handleClearError} size='lg'>
        <Alert severity='error'>{error}</Alert>
      </Modal>
      {isOpenSidebarMenu && <MenuSidebar />}
    </section>
  );
};

export default Board;
