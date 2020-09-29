import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import useForm from './useForm';
import useUploadAttchment from './useUploadAttachment';
import { deleteAttachment } from '../../services/attachments';
import { createBoard } from '../../services/boards';
import {
  setShowRegistrationModal,
  receiveBoardCreated,
} from '../../redux/actions/boards';
import { apiUrl } from '../../services/apiUrl';

const useBoardRegisterForm = () => {
  const dispatch = useDispatch();
  const [errors, setErrors] = useState([]);
  const [requestingDelAttachment, setRequestingDelAttachment] = useState(false);

  const { form, handleChange, handleSubmit, setForm } = useForm({
    initialState: {
      title: '',
      picture: { path: '', publicId: '' },
    },
    onSubmit: async (values) => {
      try {
        const boardCreated = await createBoard(values);
        setForm({ title: '', picture: { path: '', publicId: '' } });
        dispatch(receiveBoardCreated(boardCreated));
        dispatch(setShowRegistrationModal(false));
      } catch (e) {
        setErrors([...errors, e]);
      }
    },
  });

  const {
    data: attachment,
    filename,
    isUploading,
    requestUploadFile,
    progress,
    error: uploadError,
  } = useUploadAttchment(`${apiUrl}/attachments`, 'POST');

  const handleChangeFile = async ({ target }) => {
    const { files } = target;

    if (files.length) {
      if (form.picture.path) await deleteAttachment(attachment.id);
      requestUploadFile(files[0]);
    }
  };

  const handleCancel = async () => {
    if (form.picture.path) {
      setRequestingDelAttachment(true);
      await deleteAttachment(attachment.id);
      setRequestingDelAttachment(false);
    }
    dispatch(setShowRegistrationModal(false));
  };

  useEffect(() => {
    if (attachment !== null)
      setForm({
        ...form,
        picture: { path: attachment.path, publicId: attachment.id },
      });
  }, [attachment]);

  useEffect(() => {
    if (uploadError) setErrors([...errors, 'Upload file error']);
  }, [uploadError]);

  return {
    errors,
    form,
    handleChange,
    handleSubmit,
    handleChangeFile,
    handleCancel,
    requestingDelAttachment,
    uploadAttachment: {
      filename,
      isUploading,
      progress,
    },
  };
};

export default useBoardRegisterForm;
