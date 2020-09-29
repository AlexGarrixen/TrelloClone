import React from 'react';
import TextField from '../ui/TextField';
import Button from '../ui/Button';
import IconButton from '../ui/IconButton';
import Icons from '../icons';
import Alert from '../ui/Alert';
import UploadFile from '../layout/UploadFile';
import useBoardRegisterForm from '../hooks/useBoardRegisterForm';

const BoardRegisterForm = () => {
  const {
    errors,
    form,
    handleChange,
    handleSubmit,
    handleChangeFile,
    handleCancel,
    requestingDelAttachment,
    uploadAttachment,
  } = useBoardRegisterForm();

  const { isUploading, progress, filename } = uploadAttachment;

  return (
    <form className='boards__registration-form' onSubmit={handleSubmit}>
      {errors.length > 0 && (
        <Alert severity='error' className='mb-3'>
          {errors.map((err) => (
            <p>{err}</p>
          ))}
        </Alert>
      )}
      {requestingDelAttachment && (
        <Alert severity='info' className='mb-3'>
          Removing attachment
        </Alert>
      )}
      <IconButton
        color='primary'
        className='boards__registration-form__icon-close'
        onClick={handleCancel}
      >
        <Icons.Close />
      </IconButton>
      <div
        className='boards__registration-form__picture'
        style={{ backgroundImage: `url(${form.picture.path})` }}
      />
      {isUploading && (
        <UploadFile
          percentage={progress}
          filename={filename}
          className='my-3'
        />
      )}
      <TextField
        placeholder='Add board title'
        name='title'
        onChange={handleChange}
        value={form.title}
        fullWidth
        autoComplete='off'
      />
      <TextField
        type='file'
        className='hidden'
        id='contained-button-file'
        accept='image/*'
        onChange={handleChangeFile}
      />
      <label htmlFor='contained-button-file'>
        <Button component='span' startIcon={<Icons.Image />}>
          Cover
        </Button>
      </label>
      <div className='boards__registration-form__actions'>
        <Button variant='text' onClick={handleCancel}>
          Cancel
        </Button>
        <Button
          color='primary'
          disabled={form.title.length < 1}
          startIcon={<Icons.Plus />}
          type='submit'
        >
          Create
        </Button>
      </div>
    </form>
  );
};

export default BoardRegisterForm;
