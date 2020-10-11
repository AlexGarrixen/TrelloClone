import React from 'react';
import Button from '../../ui/Button';
import TextField from '../../ui/TextField';
import Icons from '../../icons/index';
import UploadFile from '../../layout/UploadFile';
import useBoard from '../../hooks/board/useBoard';
import useUpdateBoardPicture from '../../hooks/board/useUpdateBoardPicture';

const MenuPicture = () => {
  const { picture } = useBoard();
  const {
    filename,
    progress,
    isUploading,
    handleUploadAttachment,
  } = useUpdateBoardPicture();

  return (
    <div className='board-menu-sidebar__picture-wrapper'>
      <div
        className='board-menu-sidebar__picture'
        style={{ backgroundImage: `url(${picture.path})` }}
      />
      <div className='board-menu-sidebar__picture-actions'>
        {isUploading && (
          <UploadFile
            filename={filename}
            percentage={progress}
            className='mb-5'
          />
        )}
        <TextField
          accept='image/*'
          id='button-menu-sidebar-picture'
          className='hidden'
          type='file'
          onChange={handleUploadAttachment}
        />
        <label htmlFor='button-menu-sidebar-picture'>
          <Button component='span' startIcon={<Icons.Image />}>
            Cover
          </Button>
        </label>
      </div>
    </div>
  );
};

export default MenuPicture;
