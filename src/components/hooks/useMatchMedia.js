import { useState, useEffect, useRef } from 'react';

const useMatchMedia = (media) => {
  const [isMatchMedia, set] = useState(false);
  const mql = useRef(null);

  const handleMatchMedia = ({ matches }) => set(matches);

  useEffect(() => {
    if (media) {
      mql.current = window.matchMedia(media);
      mql.current.addEventListener('change', handleMatchMedia);
      set(mql.current.matches);
    }

    return () => {
      if (mql.current) {
        mql.current.removeListener(handleMatchMedia);
        set(false);
      }
    };
  }, []);

  return {
    isMatchMedia,
  };
};

export default useMatchMedia;
