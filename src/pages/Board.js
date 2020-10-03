import React from 'react';
import ListsGrid from '../components/board/ListsGrid';
import Modal from '../components/ui/Modal';
import Alert from '../components/ui/Alert';
import CardEditForm from '../components/board/CardEditForm';
import HeaderActions from '../components/board/HeaderActions';
import MenuSidebar from '../components/board/MenuSidebar/index';
import SkeletonBoardLists from '../components/layout/SkeletonBoardLists';
import useFetchBoard from '../components/hooks/useFetchBoard';
import useEditCardModal from '../components/hooks/useEditCardModal';
import useBoardSidebarMenu from '../components/hooks/useBoardSidebarMenu';
import useBoardError from '../components/hooks/useBoardError';

const Board = () => {
  const { isFetching, notFound } = useFetchBoard();
  const { isOpen, handleCloseCardSelected } = useEditCardModal();
  const { isOpen: isOpenSidebarMenu } = useBoardSidebarMenu();
  const { error, handleClearError } = useBoardError();

  if (notFound)
    return (
      <Alert severity='info' className='mt-24 mx-6'>
        Board Not Found
      </Alert>
    );

  if (isFetching) return <SkeletonBoardLists />;

  return (
    <section className='board'>
      <HeaderActions />
      <ListsGrid />
      <Modal isOpen={isOpen} onRequestClose={handleCloseCardSelected} size='lg'>
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
