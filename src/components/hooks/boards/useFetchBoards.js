import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fetchBoards } from '../../../redux/actions/boards';

const useFetchBoards = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchBoards());
  }, []);
};

export default useFetchBoards;
