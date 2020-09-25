import { useState } from 'react';

const useToggle = (initalValue = false) => {
  const [show, set] = useState(initalValue);

  const handleToogle = (display) => () => (display ? set(display) : set(!show));

  return [show, handleToogle];
};

export default useToggle;
