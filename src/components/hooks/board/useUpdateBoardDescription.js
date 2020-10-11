import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import useForm from '../useForm';
import { requestUpdateBoardDescription } from '../../../redux/actions/board';
import { isFn } from '../../../utils/typeOf';

const noop = () => {};

const useUpdateBoardDescription = (opts = { onSuccess: noop }) => {
  const { description: originalDesc } = useSelector(({ board }) => board);
  const [isRequesting, setIsRequesting] = useState(false);
  const dispatch = useDispatch();

  const { form, handleChange, handleSubmit } = useForm({
    initialState: {
      description: originalDesc,
    },
    onSubmit: ({ description }) =>
      description !== originalDesc &&
      description.length > 1 &&
      dispatch(
        requestUpdateBoardDescription(description, {
          onRequest: () => setIsRequesting(true),
          onSuccessRequest: () => {
            setIsRequesting(false);
            isFn(opts?.onSuccess) && opts.onSuccess();
          },
        })
      ),
  });

  return {
    isRequesting,
    form,
    handleChange,
    handleSubmit,
  };
};

export default useUpdateBoardDescription;
