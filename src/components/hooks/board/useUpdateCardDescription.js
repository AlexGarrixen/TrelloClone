import { useState } from 'react';
import { useDispatch } from 'react-redux';
import useForm from '../useForm';
import { requestUpdateDescription } from '../../../redux/actions/board';
import { isFn } from '../../../utils/typeOf';

const noop = () => {};

const useUpdateCardDescription = (
  initialValue = '',
  opts = { onSuccess: noop }
) => {
  const dispatch = useDispatch();
  const [isRequesting, setIsRequesting] = useState(false);

  const { form, handleChange, handleSubmit } = useForm({
    initialState: { description: initialValue },
    onSubmit: ({ description }) => {
      if (description !== initialValue && description.length > 1)
        dispatch(
          requestUpdateDescription(description, {
            onRequest: () => setIsRequesting(true),
            onSuccessRequest: () => {
              setIsRequesting(false);
              isFn(opts?.onSuccess) && opts.onSuccess();
            },
          })
        );
    },
  });

  return {
    form,
    handleChange,
    handleSubmit,
    isRequesting,
  };
};

export default useUpdateCardDescription;
