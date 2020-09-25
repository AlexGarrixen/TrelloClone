import React from 'react';
import { useSelector } from 'react-redux';
import Picture from './Picture';
import Header from './Header';
import Description from './Description';
import Attachments from './Attachments';
import Comments from './Comments';
import Actions from './Actions';
import ButtonIcon from '../../ui/IconButton';
import Icons from '../../icons';
import Alert from '../../ui/Alert';
import UploadFile from '../../layout/UploadFile';
import useEditCardModal from '../../hooks/useEditCardModal';
import useCardAttachmentUpload from '../../hooks/useCardAttachmentUpload';
import { isArray } from '../../../utils/typeOf';

const CardEditForm = () => {
  const { handleCloseCardSelected } = useEditCardModal();
  const { cardSelected, cardErrors } = useSelector(({ board }) => board);
  const { title, listName, picture, attachments, comments } = cardSelected;
  const {
    handleUploadAttachment,
    isUploading,
    progress,
    filename,
  } = useCardAttachmentUpload();

  return (
    <div className='board-card-edit-form'>
      <ButtonIcon
        color='primary'
        className='board-card-edit-form__button-close'
        onClick={handleCloseCardSelected}
      >
        <Icons.Close />
      </ButtonIcon>
      {cardErrors.length > 0 && (
        <Alert severity='error' className='mb-3'>
          {cardErrors.map((err) => (
            <p>{err}</p>
          ))}
        </Alert>
      )}
      <Picture picture={picture?.path || ''} />
      {isUploading && (
        <UploadFile
          className='mt-4'
          filename={filename}
          percentage={progress}
        />
      )}
      <Header title={title} listName={listName} />
      <div className='board-card-edit-form__body'>
        <div className='board-card-edit-form__wrapper-description-and-comments'>
          <Description />
          {isArray(attachments) && attachments.length > 0 && (
            <Attachments attachments={attachments} />
          )}
          <Comments comments={comments} />
        </div>
        <Actions onRequestUploadFile={handleUploadAttachment} />
      </div>
    </div>
  );
};

export default CardEditForm;
