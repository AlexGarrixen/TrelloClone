import { useState } from 'react';
import { usePopper as usePopperLib } from 'react-popper';

const usePopper = () => {
  const [referenceElement, setReferenceElement] = useState(null);
  const [popperElement, setPopperElement] = useState(null);
  const { styles, attributes } = usePopperLib(referenceElement, popperElement, {
    modifiers: [
      {
        name: 'offset',
        options: {
          offset: [0, 10],
        },
      },
    ],
  });

  return {
    setReferenceElement,
    setPopperElement,
    styles: styles.popper,
    attributes: { ...attributes.popper },
  };
};

export default usePopper;
