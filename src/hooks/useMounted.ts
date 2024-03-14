import { useEffect, useState } from 'react';

export const useMounted = () => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    if (!isMounted) {
      setIsMounted(true);
    }
  }, []);

  return isMounted;
};
