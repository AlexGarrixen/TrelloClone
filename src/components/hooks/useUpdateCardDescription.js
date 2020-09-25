import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import useForm from './useForm';
import { requestUpdateDescription } from '../../redux/actions/board';
import { isFn } from '../../utils/typeOf';

const useUpdateCardDescription = (onSuccess) => {
  const dispatch = useDispatch();
  const { cardSelected } = useSelector(({ board }) => board);
  const [isRequesting, setIsRequesting] = useState(false);

  const { form, handleChange, handleSubmit } = useForm({
    initialState: { description: cardSelected.description },
    onSubmit: ({ description }) => {
      if (description !== cardSelected.description && description.length > 1)
        dispatch(
          requestUpdateDescription(description, {
            onRequest: () => setIsRequesting(true),
            onSuccessRequest: () => {
              setIsRequesting(false);
              isFn(onSuccess) && onSuccess();
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
