import React from 'react';
import PropTypes from 'prop-types';
import TextField from '../ui/TextField';
import Button from '../ui/Button';
import Icons from '../icons';
import Alert from '../ui/Alert';
import UploadFile from '../layout/UploadFile';
import Modal from '../ui/Modal';
import useBoardRegisterForm from '../hooks/useBoardRegisterForm';

const BoardRegisterForm = ({ isOpen = false }) => {
  const {
    errors,
    form,
    handleChange,
    handleSubmit,
    handleChangeFile,
    handleCancel,
    requestingDelAttachment,
    requestingCreate,
    uploadAttachment,
  } = useBoardRegisterForm();

  const { isUploading, progress, filename } = uploadAttachment;

  return (
    <Modal isOpen={isOpen} onRequestClose={handleCancel}>
      <form className='boards-registration-form' onSubmit={handleSubmit}>
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
        <div
          className='boards-registration-form__picture'
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
        <div className='boards-registration-form__actions'>
          <Button variant='text' onClick={handleCancel}>
            Cancel
          </Button>
          <Button
            color='primary'
            disabled={form.title.length < 1}
            startIcon={<Icons.Plus />}
            type='submit'
          >
            {requestingCreate ? 'Creating...' : 'Create'}
          </Button>
        </div>
      </form>
    </Modal>
  );
};

BoardRegisterForm.propTypes = {
  isOpen: PropTypes.bool,
};

export default BoardRegisterForm;
