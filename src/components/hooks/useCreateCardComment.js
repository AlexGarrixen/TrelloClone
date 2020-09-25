import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { requestCreateCardComment } from '../../redux/actions/board';
import useForm from './useForm';

const useCreateCardComment = () => {
  const dispatch = useDispatch();
  const [isRequesting, setIsRequesting] = useState(false);

  const { form, handleChange, handleSubmit, setForm } = useForm({
    initialState: { comment: '' },
    onSubmit: ({ comment }) => {
      if (comment.length > 1)
        dispatch(
          requestCreateCardComment(comment, {
            onRequest: () => setIsRequesting(true),
            onSuccessRequest: () => {
              setIsRequesting(false);
              setForm({ comment: '' });
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

export default useCreateCardComment;
