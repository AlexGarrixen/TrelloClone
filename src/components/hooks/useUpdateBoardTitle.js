import { useSelector, useDispatch } from 'react-redux';
import useForm from './useForm';
import { requestUpdateBoardTitle } from '../../redux/actions/board';

const useUpdateBoardTitle = () => {
  const dispatch = useDispatch();
  const { title: originalTitle } = useSelector(({ board }) => board);

  const { form, handleChange, handleSubmit } = useForm({
    initialState: { title: originalTitle },
    onSubmit: ({ title }) =>
      title !== originalTitle &&
      title.length > 1 &&
      dispatch(requestUpdateBoardTitle(title)),
  });

  return {
    form,
    handleChange,
    handleSubmit,
  };
};

export default useUpdateBoardTitle;
