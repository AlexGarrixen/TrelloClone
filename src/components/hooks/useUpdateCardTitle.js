import { useDispatch, useSelector } from 'react-redux';
import useForm from './useForm';
import { requestUpdateCardTitle } from '../../redux/actions/board';

const useUpdateCardTitle = () => {
  const { cardSelected } = useSelector(({ board }) => board);
  const dispatch = useDispatch();

  const { form, handleChange, handleSubmit } = useForm({
    initialState: { title: cardSelected.title },
    onSubmit: ({ title }) => {
      if (title !== cardSelected.title && title.length > 0)
        dispatch(requestUpdateCardTitle(title));
    },
  });

  return {
    form,
    handleChange,
    handleSubmit,
  };
};

export default useUpdateCardTitle;
