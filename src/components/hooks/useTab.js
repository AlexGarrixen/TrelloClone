import { useState, useCallback } from 'react';

const useTab = (initialValue = '') => {
  const [value, set] = useState(initialValue);
  const setTabValue = useCallback((value) => () => set(value), [value]);

  return {
    value,
    setTabValue,
  };
};

export default useTab;
