import { useState } from 'react';
import { useDispatch } from 'react-redux';
import useForm from './useForm';
import { requestCreateLabel } from '../../redux/actions/board';
import { isFn } from '../../utils/typeOf';

const useCreateCardLabel = (defaultColor = '', onSuccess) => {
  const dispatch = useDispatch();
  const [isRequesting, setIsRequesting] = useState(false);

  const { form, handleChange, handleSubmit, setForm } = useForm({
    initialState: {
      title: '',
      color: defaultColor,
    },
    onSubmit: ({ title, color }) => {
      if (title.length > 1 && color.length > 1)
        dispatch(
          requestCreateLabel(
            { title, color },
            {
              onRequest: () => setIsRequesting(true),
              onSuccessRequest: () => {
                setIsRequesting(false);
                isFn(onSuccess) && onSuccess();
              },
            }
          )
        );
    },
  });

  const handleColorSelect = (color) => () => setForm({ ...form, color });

  return {
    handleColorSelect,
    handleChange,
    handleSubmit,
    form,
    isRequesting,
  };
};

export default useCreateCardLabel;
