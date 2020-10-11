import { useState } from 'react';
import { useDispatch } from 'react-redux';
import useForm from '../useForm';
import { requestUpdateCardComment } from '../../../redux/actions/board';
import { isFn } from '../../../utils/typeOf';

const noop = () => {};

const useUpdateCardComment = (
  commentId,
  commentCurrent,
  opts = { onSuccess: noop }
) => {
  const dispatch = useDispatch();
  const [isRequesting, setIsRequesting] = useState(false);

  const { form, handleChange, handleSubmit } = useForm({
    initialState: { comment: commentCurrent },
    onSubmit: ({ comment }) => {
      if (comment.length > 1)
        dispatch(
          requestUpdateCardComment(commentId, comment, {
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

export default useUpdateCardComment;
