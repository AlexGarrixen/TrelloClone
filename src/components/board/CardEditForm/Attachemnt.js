import React, { useMemo } from 'react';
import PropTypes from 'prop-types';
import dayjs from 'dayjs';
import Button from '../../ui/Button';
import useDeleteCardAttachment from '../../hooks/board/useDeleteCardAttachment';
import useUpdateCardPicture from '../../hooks/board/useUpdateCardPicture';
import useCard from '../../hooks/board/useCard';
import downloadFile from '../../../utils/downloadFile';

const ButtonAsCover = ({ path, publicId }) => {
  const { handleUpdatePicture, isRequesting } = useUpdateCardPicture();

  return (
    <Button
      variant='outlined'
      onClick={() => handleUpdatePicture(path, publicId)}
    >
      {isRequesting ? 'Setting...' : 'As cover'}
    </Button>
  );
};

const ButtonDelete = ({ publicId, attachmentId }) => {
  const { handleDeleteAttachment, isRequesting } = useDeleteCardAttachment();

  return (
    <Button
      variant='outlined'
      onClick={() => handleDeleteAttachment(publicId, attachmentId)}
    >
      {isRequesting ? 'Deleting...' : 'Delete'}
    </Button>
  );
};

const Attachment = ({ _id, originalname, date, path, publicId }) => {
  const card = useCard();
  const attachmentSetAsCover = card?.picture.publicId === publicId;
  const dateFormated = useMemo(() => dayjs(date).format('MMMM D, YYYY'), [
    date,
  ]);

  return (
    <article className='board-card-edit-form__attachment'>
      <div
        className='board-card-edit-form__attachment-picture'
        style={{ backgroundImage: `url(${path})` }}
      />
      <div>
        <p className='board-card-edit-form__attachment-date'>
          Add {dateFormated}
        </p>
        <p className='board-card-edit-form__attachment-name truncate'>
          {originalname}
        </p>
        <div className='board-card-edit-form__attachment-actions'>
          <Button
            variant='outlined'
            onClick={() => downloadFile(path, originalname)}
          >
            Download
          </Button>
          {!attachmentSetAsCover && (
            <ButtonAsCover path={path} publicId={publicId} />
          )}
          <ButtonDelete publicId={publicId} attachmentId={_id} />
        </div>
      </div>
    </article>
  );
};

ButtonAsCover.propTypes = {
  path: PropTypes.string,
  publicId: PropTypes.string,
};

ButtonDelete.propTypes = {
  publicId: PropTypes.string,
  attachmentId: PropTypes.string,
};

Attachment.propTypes = {
  _id: PropTypes.string,
  originalname: PropTypes.string,
  date: PropTypes.string,
  path: PropTypes.string,
  publicId: PropTypes.string,
};

export default Attachment;
