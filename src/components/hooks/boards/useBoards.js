import { useSelector } from 'react-redux';

const useBoards = () => {
  const { isFetching, error, data } = useSelector(({ boards }) => boards);

  return {
    isFetching: isFetching,
    boards: data,
    error: error,
  };
};

export default useBoards;
