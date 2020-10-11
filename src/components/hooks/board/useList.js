import { useSelector } from 'react-redux';

const useList = (listId) => {
  const list = useSelector(({ lists }) => lists.byId[listId]);

  return list;
};

export default useList;
