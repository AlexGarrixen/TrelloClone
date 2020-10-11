import { useState } from 'react';
import { useDispatch } from 'react-redux';
import useForm from '../useForm';
import { requestUpdateListTitle } from '../../../redux/actions/board';
import { isFn } from '../../../utils/typeOf';

const noop = () => {};

const useUpdateListTitle = (
  initialValue = '',
  listId,
  options = { onSuccess: noop }
) => {
  const dispatch = useDispatch();
  const [isRequesting, setRequesting] = useState(false);

  const { form, handleChange, handleSubmit } = useForm({
    initialState: { title: initialValue },
    onSubmit: ({ title }) => {
      if (title.length > 1)
        dispatch(
          requestUpdateListTitle(listId, title, {
            onRequest: () => setRequesting(true),
            onSuccessRequest: () => {
              setRequesting(false);
              isFn(options?.onSuccess) && options.onSuccess();
            },
          })
        );
    },
  });

  return {
    isRequesting,
    form,
    handleChange,
    handleSubmit,
  };
};

export default useUpdateListTitle;
