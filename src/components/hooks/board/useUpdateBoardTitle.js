import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import useForm from '../useForm';
import { requestUpdateBoardTitle } from '../../../redux/actions/board';

const useUpdateBoardTitle = () => {
  const dispatch = useDispatch();
  const { title: originalTitle } = useSelector(({ board }) => board);

  const { form, handleChange, handleSubmit, setForm } = useForm({
    initialState: { title: originalTitle },
    onSubmit: ({ title }) =>
      title !== originalTitle &&
      title.length > 1 &&
      dispatch(requestUpdateBoardTitle(title)),
  });

  useEffect(() => {
    if (originalTitle !== form.title) setForm({ title: originalTitle });
  }, [originalTitle]);

  return {
    form,
    handleChange,
    handleSubmit,
  };
};

export default useUpdateBoardTitle;
