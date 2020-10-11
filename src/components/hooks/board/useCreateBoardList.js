import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import useForm from '../useForm';
import { requestCreateList } from '../../../redux/actions/board';
import { isFn } from '../../../utils/typeOf';

const noop = () => {};

const useCreateBoardList = (opts = { onSuccess: noop }) => {
  const [isRequesting, setIsRequesting] = useState(false);
  const { boardId } = useParams();
  const dispatch = useDispatch();

  const { form, handleChange, handleSubmit, setForm } = useForm({
    initialState: { title: '' },
    onSubmit: ({ title }) =>
      title.length > 1 &&
      dispatch(
        requestCreateList(
          boardId,
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

export default useCreateBoardList;
