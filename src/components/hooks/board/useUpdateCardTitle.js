import { useDispatch, useSelector } from 'react-redux';
import useForm from '../useForm';
import { requestUpdateCardTitle } from '../../../redux/actions/board';

const useUpdateCardTitle = () => {
  const { cardSelected } = useSelector(({ board }) => board);
  const card = useSelector(({ cards }) => cards.byId[cardSelected]);
  const dispatch = useDispatch();

  const { form, handleChange, handleSubmit } = useForm({
    initialState: { title: card?.title || '' },
    onSubmit: ({ title }) => {
      if (title !== card.title && title.length > 0)
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
