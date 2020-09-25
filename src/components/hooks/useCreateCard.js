import { useState } from 'react';
import { useDispatch } from 'react-redux';
import useForm from './useForm';
import { requestCreateCard } from '../../redux/actions/board';

const useCreateCard = (listId, onSuccess) => {
  const [isRequesting, setIsRequesting] = useState(false);
  const dispatch = useDispatch();

  const { form, handleChange, handleSubmit, setForm } = useForm({
    initialState: { title: '' },
    onSubmit: ({ title }) =>
      title.length > 1 &&
      dispatch(
        requestCreateCard(
          listId,
          { title },
          {
            onRequest: () => setIsRequesting(true),
            onSuccessRequest: () => {
              setIsRequesting(false);
              setForm({ title: '' });
              onSuccess();
            },
          }
        )
      ),
  });

  return {
    isRequesting,
    form,
    handleChange,
    handleSubmit,
  };
};

export default useCreateCard;
