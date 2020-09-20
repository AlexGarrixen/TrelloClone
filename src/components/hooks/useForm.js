import { useState, useCallback } from 'react';

const useForm = ({ initialState, onSubmit }) => {
  const [form, setForm] = useState(initialState);

  const handleChange = useCallback(
    ({ target }) =>
      setForm((form) => ({ ...form, [target.name]: target.value })),
    [form, setForm]
  );

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(form);
  };

  return { form, handleChange, handleSubmit, setForm };
};

export default useForm;
