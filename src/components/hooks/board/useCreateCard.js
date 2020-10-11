import { useState } from 'react';
import { useDispatch } from 'react-redux';
import useForm from '../useForm';
import { requestCreateCard } from '../../../redux/actions/board';
import { isFn } from '../../../utils/typeOf';

const noop = () => {};

const useCreateCard = (listId, opts = { onSuccess: noop }) => {
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
              isFn(opts?.onSuccess) && opts.onSuccess();
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
