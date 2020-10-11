import React from 'react';
import Picture from './Picture';
import Header from './Header';
import Description from './Description';
import Attachments from './Attachments';
import Comments from './Comments';
import Actions from './Actions';
import Alert from '../../ui/Alert';
import UploadFile from '../../layout/UploadFile';
import useCardAttachmentUpload from '../../hooks/board/useCardAttachmentUpload';
import useCard from '../../hooks/board/useCard';
import useBoard from '../../hooks/board/useBoard';
import { isArray } from '../../../utils/typeOf';

const CardEditForm = () => {
  const { cardErrors } = useBoard();
  const card = useCard();

  const {
    handleUploadAttachment,
    isUploading,
    progress,
    filename,
  } = useCardAttachmentUpload();

  return (
    <div className='board-card-edit-form'>
      {cardErrors.length > 0 && (
        <Alert severity='error' className='mb-3'>
          {cardErrors.map((err) => (
            <p>{err}</p>
          ))}
        </Alert>
      )}
      <Picture picture={card?.picture.path || ''} />
      {isUploading && (
        <UploadFile
          className='mt-4'
          filename={filename}
          percentage={progress}
        />
      )}
      <Header listName={card?.listName || ''} />
      <div className='board-card-edit-form__body'>
        <div className='board-card-edit-form__wrapper-description-and-comments'>
          <Description />
          {isArray(card?.attachments) && (
            <Attachments attachments={card.attachments} />
          )}
          {isArray(card?.comments) && <Comments comments={card.comments} />}
        </div>
        <Actions onRequestUploadFile={handleUploadAttachment} />
      </div>
    </div>
  );
};

export default CardEditForm;
