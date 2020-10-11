import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';
import OutsideClickHandler from 'react-outside-click-handler';
import TextField from '../ui/TextField';
import IconButton from '../ui/IconButton';
import Button from '../ui/Button';
import Icons from '../icons';
import Badge from '../ui/Badge';
import useCreateCardLabel from '../hooks/board/useCreateCardLabel';
import useDeleteCardLabel from '../hooks/board/useDeleteCardLabel';
import useCard from '../hooks/board/useCard';

const PopoverAddLabel = forwardRef(
  ({ onOutsideClick, onRequestClose, ...other }, ref) => {
    const colors = ['blue', 'green', 'orange', 'purple', 'yellow'];
    const card = useCard();
    const {
      form,
      handleChange,
      handleSubmit,
      handleColorSelect,
      isRequesting,
    } = useCreateCardLabel('blue', { onSuccess: onRequestClose });
    const { handleDeleteLabel } = useDeleteCardLabel();

    return (
      <OutsideClickHandler onOutsideClick={onOutsideClick}>
        <div ref={ref} className='board-popover-add-label' {...other}>
          <div className='board-popover-add-label__header'>
            <div>
              <h3 className='board-popover-add-label__header-title'>Label</h3>
              <p className='board-popover-add-label__header-text-help'>
                Select a name and color
              </p>
            </div>
            <IconButton
              className='board-popover-add-label__header-button-close'
              variant='text'
              onClick={onRequestClose}
            >
              <Icons.Close />
            </IconButton>
          </div>
          <TextField
            autoComplete='off'
            placeholder='label'
            value={form.title}
            name='title'
            onChange={handleChange}
            fullWidth
          />
          <ul className='board-popover-add-label__grid-colors'>
            {colors.map((color) => (
              <li
                key={color}
                className={`board-popover-add-label__color color--${color}`}
                onClick={handleColorSelect(color)}
              >
                {form.color === color && <Icons.Check size='sm' />}
              </li>
            ))}
          </ul>
          {card?.labels.length > 0 && (
            <div className='board-popover-add-label__avaliable-labels'>
              <div className='board-popover-add-label__header-avaliable-labels'>
                <Icons.Tag />
                <h3 className='board-popover-add-label__header-title-avaliable-labels'>
                  Avaliable
                </h3>
              </div>
              <ul className='board-popover-add-label__grid-avaliable-labels'>
                {card.labels.map(({ title, color, _id }) => (
                  <Badge color={color} className='relative' key={_id}>
                    {title}
                    <div className='board-popover-add-label__button-delete-avaliable-label'>
                      <Icons.Close
                        size='xs'
                        onClick={() => handleDeleteLabel(_id)}
                      />
                    </div>
                  </Badge>
                ))}
              </ul>
            </div>
          )}
          <Button
            color='primary'
            onClick={handleSubmit}
            disabled={form.title.length < 1 || form.color.length < 1}
          >
            {isRequesting ? 'Adding...' : 'Add'}
          </Button>
        </div>
      </OutsideClickHandler>
    );
  }
);

PopoverAddLabel.propTypes = {
  onOutsideClick: PropTypes.func,
  onRequestClose: PropTypes.func,
};

export default PopoverAddLabel;
