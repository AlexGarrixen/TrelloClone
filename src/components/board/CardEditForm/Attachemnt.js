import React, { useMemo } from 'react';
import { useSelector } from 'react-redux';
import dayjs from 'dayjs';
import Button from '../../ui/Button';
import useDeleteCardAttachment from '../../hooks/useDeleteCardAttachment';
import useUpdateCardPicture from '../../hooks/useUpdateCardPicture';
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

const ButtonDelete = ({ publicId }) => {
  const { handleDeleteAttachment, isRequesting } = useDeleteCardAttachment();

  return (
    <Button variant='outlined' onClick={() => handleDeleteAttachment(publicId)}>
      {isRequesting ? 'Deleting...' : 'Delete'}
    </Button>
  );
};

const Attachment = ({ originalname, path, publicId, date }) => {
  const { cardSelected } = useSelector(({ board }) => board);

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
        <p className='board-card-edit-form__attachment-name'>{originalname}</p>
        <div className='board-card-edit-form__attachment-actions'>
          <Button
            variant='outlined'
            onClick={() => downloadFile(path, originalname)}
          >
            Download
          </Button>
          {cardSelected.picture.path !== path && (
            <ButtonAsCover path={path} publicId={publicId} />
          )}
          <ButtonDelete publicId={publicId} />
        </div>
      </div>
    </article>
  );
};

export default Attachment;
